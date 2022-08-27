import clsx from 'clsx';
// import { getScrollbarWidth } from 'components/ModalLayer/ModalLayer';
import Fade from 'components/Transitions/Fade';
import { useElementDimensions } from 'hooks/useElementDimensions';
import useWindowSize from 'hooks/useWindowSize';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from 'react';
import { isMouse } from 'utils/isMouse';
import { isTouch } from 'utils/isTouch';

export const getScrollbarWidth = () => {
  if (typeof window === 'undefined') {
    return 0;
  }
  // Creating invisible container
  const outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.overflow = 'scroll'; // forcing scrollbar to appear
  if ((outer as any)?.style?.msOverflowStyle) {
    (outer as any).style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
  }
  document.body.appendChild(outer);

  // Creating inner element and placing it in the container
  const inner = document.createElement('div');
  outer.appendChild(inner);

  // Calculating difference between container's full width and the child width
  const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

  // Removing temporary elements from the DOM
  outer.parentNode?.removeChild(outer);

  return scrollbarWidth;
};

// =========================================================
// ATTENTION: NEEDS REFACTORING, BUT LATER  ¯\_(ツ)_/¯
// =========================================================

interface HookProps {
  children: React.ReactNode[];
  childMarginRight?: number;
  resetScrollOnChildrenChange?: boolean;
  lockOnScroll?: boolean;
  disableShadows?: boolean;
}

interface Props extends HookProps {
  next?: number;
  prev?: number;
}

type DirectionType = 'toLeft' | 'toRight' | 'toTop' | 'toBottom';

type EventType =
  | React.MouseEvent<HTMLDivElement>
  | React.TouchEvent<HTMLDivElement>;
type Timestamp = number;

export const useCarousel = (props: HookProps) => {
  const [getPrevToggle, incrementGetPrev] = useReducer((val) => val + 1, 0);
  const [getNextToggle, incrementGetNext] = useReducer((val) => val + 1, 0);
  return {
    carousel: (
      <NewCarousel
        next={getNextToggle}
        prev={getPrevToggle}
        childMarginRight={props.childMarginRight}
        disableShadows={props.disableShadows}
        lockOnScroll={props.lockOnScroll}
        resetScrollOnChildrenChange={props.resetScrollOnChildrenChange}
      >
        {props.children}
      </NewCarousel>
    ),
    getNext: incrementGetNext,
    getPrev: incrementGetPrev,
  };
};

const NewCarousel = ({
  children,
  childMarginRight,
  resetScrollOnChildrenChange,
  disableShadows = false,
  next,
  prev,
}: Props) => {
  // return <></>;
  const { width } = useWindowSize();
  const windowRef = useRef<HTMLDivElement>(null);
  const { width: carouselWindowWidth } = useElementDimensions(windowRef);
  const dirOptionsY: DirectionType[] = useMemo(() => {
    return ['toBottom', 'toTop'];
  }, []);
  const [dir, setDir] = useState<DirectionType | null>(null);
  const [accelerationHistory, setAccelerationHistory] = useState<
    [Vector, Timestamp][]
  >([]);
  const [translation, setTranslation] = useState(() => {
    return new Vector();
  });
  const [childrenWidths, setChildrenWidths] = useState<{
    [key: string]: number;
  }>({});
  const childrenWidth = Object.values(childrenWidths).reduce(
    (acc, val) => acc + val,
    0
  );

  const maxX = 0;
  const minX = useMemo(() => {
    // EXTRA SPACING CALC
    const numFloors = Math.ceil(childrenWidth / carouselWindowWidth);
    const lastFloorStartX = carouselWindowWidth * numFloors - 1;
    let sum = 0;
    for (let i = 0; i < children.length; i++) {
      if (sum + childrenWidths[i] < lastFloorStartX) {
        sum += childrenWidths[i];
      } else {
        break;
      }
    }

    // const floorsWidth = numFloors * carouselWindowWidth;
    return -sum + carouselWindowWidth;

    // return -sum + carouselWindowWidth;
    // let idx = 0;
    // let sum = 0;
    // for (let i = 0; i < children.length - 1; i++) {
    //   if (sum + childrenWidths[i] < Math.abs(numFloors * carouselWindowWidth)) {
    //     sum += childrenWidths[i];
    //   } else {
    //     idx = i - 1;
    //   }
    // }
    // return -sum;
  }, [carouselWindowWidth, children.length, childrenWidth, childrenWidths]);
  // console.log(minX);

  const [showLeftShadow, setShowLeftShadow] = useState(false);
  const [showRightShadow, setShowRightShadow] = useState(false);

  useEffect(() => {
    if (disableShadows) {
      return;
    }
    if (translation.x != 0) {
      setShowLeftShadow(true);
    } else {
      setShowLeftShadow(false);
    }

    if (translation.x > minX) {
      setShowRightShadow(true);
    } else {
      setShowRightShadow(false);
    }
  }, [disableShadows, minX, translation.x]);

  useEffect(() => {
    if (resetScrollOnChildrenChange) {
      setTranslation(new Vector());
      animateTranslate(new Vector());
    }
  }, [children.length, resetScrollOnChildrenChange]);

  const [prevTouch, setPrevTouch] = useState<Vector | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const getOffset = useCallback(
    (idx: number) => {
      const widths: WidthType[] = Object.values(childrenWidths).map(
        (val, idx) => [val, idx]
      );
      const offset = widths
        .filter((val) => val[1] <= idx)
        .reduce((acc, val) => acc + val[0], 0);
      return offset;
    },
    [childrenWidths]
  );

  const getIdx = useCallback(
    (_newTransX?: number) => {
      const widths: WidthType[] = Object.values(childrenWidths).map(
        (val, idx) => [val, idx]
      );
      const curTrans = _newTransX ? -_newTransX : -translation.x;

      for (let i = 0; i < widths.length - 1; i++) {
        const offset = getOffset(i);
        if (curTrans < offset) {
          return i;
        }
      }
      return widths.length - 1;
    },
    [childrenWidths, getOffset, translation.x]
  );

  const eventOnTouchEndHandler = () => {
    setDir(null);
  };

  useEffect(() => {
    window.addEventListener('mouseup', eventOnTouchEndHandler);
    return () => {
      window.removeEventListener('mouseup', eventOnTouchEndHandler);
    };
  }, []);

  useEffect(() => {
    setChildrenWidths({});
  }, [width]);
  const updateLengths = useCallback(
    (idx: number, width: number) => {
      if (childrenWidths[idx] === undefined) {
        setChildrenWidths((prev) => ({ ...prev, [idx]: width }));
      }
    },
    [childrenWidths]
  );

  //   HANDLERS
  const moveStartHandler = (_e: EventType) => {
    _e.preventDefault();

    // _e.preventDefault();
    if (isTouch(_e)) {
      const e = isTouch(_e) as React.TouchEvent<HTMLDivElement>;
      const pageX = e.touches[0].pageX;
      const pageY = e.touches[0].pageY;
      setPrevTouch(new Vector(pageX, pageY));
    }
    if (isMouse(_e)) {
      const e = isMouse(_e) as React.MouseEvent<HTMLDivElement>;
      if (e.buttons === 1) {
        setPrevTouch(new Vector(e.clientX, e.clientY));
      }
    }
  };

  const handleMoveX = useCallback(
    (moveX: number, moveY: number) => {
      if (!containerRef.current || (dir && dirOptionsY.includes(dir))) {
        return;
      }

      // setAcceleration(new Vector(moveX, moveY));
      const acceleration = new Vector(moveX, moveY);
      // accelerationHistory.current.push([acceleration, Number(new Date())]);
      setAccelerationHistory([
        ...accelerationHistory,
        [acceleration, Number(new Date())],
      ]);

      let newTranslationX = translation.x + acceleration.x;
      if (newTranslationX > maxX) {
        newTranslationX = maxX;
      }
      if (newTranslationX < minX) {
        newTranslationX = minX;
      }
      containerRef.current.style.transform = `translateX(${newTranslationX}px)`;
      const newTranslation = new Vector(newTranslationX, translation.y);
      setTranslation(newTranslation);
      setPrevTouch(newTranslation);
    },
    [accelerationHistory, dir, dirOptionsY, minX, translation.x, translation.y]
  );
  const handleDir = (movementX: number, movementY: number) => {
    if (dir !== null || !containerRef.current) {
      return;
    }
    if (Math.abs(movementX) > Math.abs(movementY) - (movementY > 0 ? -1 : 1)) {
      // scroll x
      if (movementX > 0) {
        lock();
        setDir('toRight');
      } else {
        lock();
        setDir('toLeft');
      }
    } else {
      // scroll y
      if (movementY > 0) {
        setDir('toBottom');
        unlock();
      } else {
        setDir('toTop');
        unlock();
      }
    }
  };

  const moveHandler = (_e: EventType) => {
    if (!containerRef.current) {
      return;
    }
    _e.preventDefault();

    if (isTouch(_e)) {
      const e = isTouch(_e) as React.TouchEvent<HTMLDivElement>;
      const clientX = e.touches[0].pageX;
      const clientY = e.touches[0].pageY;
      //
      if (prevTouch) {
        const moveX = clientX - prevTouch.x;
        const moveY = clientY - prevTouch.y;

        handleDir(moveX, moveY);
        if (dir && dirOptionsY.includes(dir)) {
          return;
        }

        handleMoveX(moveX, moveY);
        setPrevTouch(new Vector(clientX, clientY));
      }
    } else if (isMouse(_e)) {
      const e = isMouse(_e) as React.MouseEvent<HTMLDivElement>;
      if (e.buttons === 1) {
        handleDir(e.movementX, e.movementY);
        if (dir && !dirOptionsY.includes(dir)) {
          handleMoveX(e.movementX, e.movementY);
          setPrevTouch(new Vector(e.clientX, e.clientY));
        }
      }
    }
  };
  type Width = number;
  type Index = number;
  type WidthType = [Width, Index];

  const animateTranslate = (vec: Vector) => {
    if (containerRef.current) {
      const refCopy = containerRef.current;
      const animationDurationMs = 300;
      containerRef.current.style.transition = `all ${animationDurationMs}ms ease`;

      containerRef.current.style.transform = `translateX(${vec.x}px)`;
      setTimeout(() => {
        refCopy.style.transition = ``;
      }, animationDurationMs);
    }
  };
  const fitVec = (vec: Vector, minX: number, maxX: number) => {
    if (vec.x < minX) {
      vec.x = minX;
    }
    if (vec.x > maxX) {
      vec.x = maxX;
    }
  };
  const handleSnap = useCallback(
    (idx: number, _dir?: DirectionType) => {
      // const idx = getIdx(newTranslation.x);
      const offset = getOffset(idx);
      const width = childrenWidths[idx];

      // console.log(`trans: ${-newTranslation.x}, --- ${offset} `);
      if (dir === 'toLeft' || _dir === 'toLeft') {
        const vec = new Vector(-offset, translation.y);
        fitVec(vec, minX, maxX);
        setTranslation(vec);
        animateTranslate(vec);
        setDir(null);
        unlock();
      } else if (dir === 'toRight' || _dir === 'toRight') {
        const vec = new Vector(-offset + width, translation.y);
        fitVec(vec, minX, maxX);
        setTranslation(vec);
        animateTranslate(vec);
        setDir(null);
        unlock();
      }
    },
    [childrenWidths, dir, getOffset, minX, translation.y]
  );

  // console.log(getIdx(translation.x));

  const handleEnd = useCallback(() => {
    if (containerRef.current) {
      const refCopy = containerRef.current;
      const xs = accelerationHistory.map((vec) => vec[0].x);
      const avgX = xs.reduce((acc, v) => acc + v, 0);
      const numX = xs.length;
      const velocity = avgX / numX;
      // console.log('AAAA');
      // console.log(accelerationHistory);
      // console.log('AAAA');

      const now = Number(new Date());

      let shouldAccelerate = false;
      const accHistoryLen = accelerationHistory.length;
      if (accHistoryLen > 1) {
        shouldAccelerate = now - accelerationHistory[accHistoryLen - 1][1] < 15;
      }

      const newTranslation = new Vector(translation.x, translation.y);
      if (shouldAccelerate && velocity) {
        const animationDurationMs = 300;
        const numChildren = children.length;
        const avgChildWidth =
          Object.values(childrenWidths).reduce((acc, val) => acc + val, 0) /
          children.length;
        const multipler =
          Math.abs(velocity) > 70 ? numChildren : Math.abs(velocity) / 20;
        const finalTranslation =
          translation.x +
          (velocity > 0
            ? avgChildWidth * multipler
            : -avgChildWidth * multipler);

        newTranslation.x = finalTranslation;
        // setTranslation(new Vector(finalTranslation, translation.y));
        if (newTranslation.x > maxX) {
          newTranslation.x = maxX;
        }
        if (newTranslation.x < minX) {
          newTranslation.x = minX;
        }
        setTranslation(newTranslation);
        setPrevTouch(newTranslation);

        containerRef.current.style.transition = `all ${animationDurationMs}ms ease`;
        containerRef.current.style.transform = `translateX(${newTranslation.x}px)`;
        setTimeout(() => {
          refCopy.style.transition = ``;
        }, animationDurationMs);
      }
      const idx = getIdx(newTranslation.x);
      handleSnap(idx);
    }
  }, [
    accelerationHistory,
    children.length,
    childrenWidths,
    getIdx,
    handleSnap,
    minX,
    translation.x,
    translation.y,
  ]);

  const moveEndHandler = useCallback(
    (_e: EventType) => {
      if (!containerRef.current) {
        return;
      }
      if (isTouch(_e)) {
        const e = isTouch(_e) as React.TouchEvent<HTMLDivElement>;
        handleEnd();
      }
      if (isMouse(_e)) {
        const e = isMouse(_e) as React.MouseEvent<HTMLDivElement>;
        handleEnd();
      }
      setAccelerationHistory([]);
      setPrevTouch(null);
      setDir(null);
      unlock();
    },
    [handleEnd]
  );

  // HANDLING BUTTON CLICKS:
  const [localNext, setLocalNext] = useState(() => next || 0);
  const [localPrev, setLocalPrev] = useState(() => next || 0);

  useEffect(() => {
    if (next && next != localNext) {
      let idx = getIdx(translation.x);
      if (idx > children.length - 1) {
        idx = children.length - 1;
      }
      handleSnap(idx, 'toLeft');
      setLocalNext(next);
    }
  }, [
    handleSnap,
    next,
    getIdx,
    localNext,
    childrenWidths,
    translation.x,
    children.length,
  ]);
  useEffect(() => {
    if (prev && prev != localPrev) {
      let idx = getIdx(translation.x) - 1;
      if (idx < 0) {
        idx = 0;
      }
      handleSnap(idx, 'toRight');
      setLocalPrev(prev);
    }
  }, [handleSnap, prev, getIdx, localPrev, childrenWidths, translation.x]);
  // console.log(accelerationHistory);

  // ADD EVENT LISTENTER FOR MOUSE UP / TOUCH END
  const removeScrollLock = useCallback(
    (e: MouseEvent | TouchEvent) => {
      if (accelerationHistory.length > 0) {
        handleSnap(getIdx(), dir || 'toLeft');
      }
    },
    // Так задумано
    [accelerationHistory]
  );

  useEffect(() => {
    window.addEventListener('mouseup', removeScrollLock);
    window.addEventListener('touchend', removeScrollLock);
    return () => {
      window.removeEventListener('mouseup', removeScrollLock);
      window.removeEventListener('touchend', removeScrollLock);
    };
  }, [removeScrollLock]);

  return (
    <div className="relative h-full w-full">
      {/* LEFT SHADOW */}
      <Fade shouldRender={showLeftShadow}>
        <div
          style={{
            background:
              'linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,0))',
          }}
          className="h-full absolute left-0 top-0 z-50 w-[42px] "
        />
      </Fade>
      {/* RIGHT SHADOW */}
      <Fade shouldRender={showRightShadow}>
        <div
          style={{
            background:
              'linear-gradient(to left, rgba(255,255,255,1), rgba(255,255,255,0))',
          }}
          className="h-full absolute right-0 top-0 z-50 w-[42px]"
        />
      </Fade>

      <div
        ref={containerRef}
        className={clsx(
          {
            ' touch-pan-x': dir !== null,
          },
          'flex relative select-none h-full w-full'
        )}
        //
        onMouseDown={moveStartHandler}
        onTouchStart={moveStartHandler}
        //
        onMouseMove={moveHandler}
        onTouchMove={moveHandler}
        //
        onMouseUp={moveEndHandler}
        onTouchEnd={moveEndHandler}
      >
        {/* Needed to set height of the container */}
        {children.length > 0 && (
          <div className="opacity-0 pointer-events-none">{children[0]}</div>
        )}
        <div
          ref={windowRef}
          className={clsx(
            {
              ' touch-pan-x': dir !== null,
            },
            'absolute opacity-0 pointer-events-none w-full h-full left-0 top-0 max-w-[1280px]'
          )}
        />
        <div className={clsx('absolute flex select-none h-full')}>
          <div
            className={clsx(
              {
                'pointer-events-none touch-pan-x': dir !== null,
              },
              'flex select-none h-full'
            )}
          >
            {children.map((child, idx) => (
              <MemoedChildWrapper
                childMarginRight={childMarginRight || 0}
                child={child}
                idx={idx}
                setWidth={updateLengths}
                key={`carousel-child-${idx}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

function lock() {
  document.body.style.overflow = 'hidden';
  // document.body.style.position = 'fixed';
  document.body.style.marginRight = `${getScrollbarWidth()}px`;
  // document.body.style.touchAction = 'none';
}
function unlock() {
  document.body.style.overflow = '';
  // document.body.style.position = '';

  document.body.style.marginRight = '';
  // document.body.style.touchAction = '';
}

const ChildWrapper = ({
  child,
  setWidth,
  idx,
  childMarginRight,
}: {
  child: React.ReactNode;
  setWidth: (idx: number, width: number) => void;
  idx: number;
  childMarginRight: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      setWidth(idx, ref.current.getBoundingClientRect().width);
    }
  }, [idx, setWidth]);

  return (
    <div
      ref={ref}
      style={{
        paddingRight: childMarginRight,
      }}
      className={clsx('w-auto h-auto ')}
    >
      {child}
    </div>
  );
};

const MemoedChildWrapper = React.memo(ChildWrapper);

export default useCarousel;

class Vector {
  public x: number;
  public y: number;
  constructor(x?: number, y?: number) {
    this.x = x || 0;
    this.y = y || 0;
  }

  mult(n: number) {
    this.x *= n;
    this.y *= n;
  }

  magSq() {
    const x = this.x;
    const y = this.y;
    return x * x + y * y;
  }
  mag() {
    return Math.sqrt(this.magSq());
  }

  normalize() {
    const len = this.mag();
    // here we multiply by the reciprocal instead of calling 'div()'
    // since div duplicates this zero check.
    if (len !== 0) this.mult(1 / len);
    return this;
  }
}
