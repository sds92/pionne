import useIntersectionObserver from 'utils/useIntersectionObserver';
import React, { memo, MouseEvent, TouchEvent, useEffect, useMemo, useRef, useState } from 'react';

const Carousel = ({
  children,
  mode = 'HORISONTAL',
  allowSnapping = false,
  currentIndex,
  setCurIndex,
}: {
  children: React.ReactNode[];
  mode?: 'HORISONTAL' | 'VERTICAL';
  allowSnapping?: boolean;
  currentIndex?: number;
  setCurIndex?: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const [translateValue, setTranslateValue] = useState(0);
  const [direction, setDirection] = useState<'getNext' | 'getPrev'>('getPrev');
  const maxTranslateX = 0;
  const numChildren = useMemo(() => {
    return children.length;
  }, [children]);
  // const [_currentIndex, _setCurrentIndex] = useState(0);

  const carouselRef = useRef<HTMLDivElement>(null);
  const innerWrapperRef = useRef<HTMLDivElement>(null);
  const lastChildRef = useRef<HTMLDivElement>(null);

  const observer = useIntersectionObserver(lastChildRef, { threshold: 1 });
  const lastIsVisible = !!observer?.isIntersecting;

  // handler for mouse
  const handleMouseMove = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    const carouselRect = carouselRef.current?.getBoundingClientRect();
    const innerWrapperRect = innerWrapperRef.current?.getBoundingClientRect();

    if (e.buttons === 1 && carouselRect && innerWrapperRect) {
      const minTranslateX =
        innerWrapperRect.width > carouselRect.width ? -(innerWrapperRect.width - carouselRect.width) : 0;

      setTranslateValue((prev) => {
        if (e.movementX > 0) {
          if (direction !== 'getPrev') {
            setDirection('getPrev');
          }
          return Math.min(prev + e.movementX, maxTranslateX);
        } else {
          if (lastIsVisible) {
            return prev;
          }
          if (direction !== 'getNext') {
            setDirection('getNext');
          }
          return Math.max(prev + e.movementX, minTranslateX);
        }
      });
    }
  };

  // mobile touch handling
  const [prevTouchVal, setPrevTouchVal] = useState<number | undefined>(undefined);
  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    const carouselRect = carouselRef.current?.getBoundingClientRect();
    const innerWrapperRect = innerWrapperRef.current?.getBoundingClientRect();

    if (prevTouchVal !== undefined && carouselRect && innerWrapperRect) {
      const minTranslateX =
        innerWrapperRect.width > carouselRect.width ? -(innerWrapperRect.width - carouselRect.width) : 0;
      const touch = e.touches[0];
      const curX = touch.clientX;
      const dif = touch.clientX - prevTouchVal;

      setTranslateValue((prev) => {
        if (dif > 0) {
          if (direction !== 'getPrev') {
            setDirection('getPrev');
          }
          return Math.min(prev + dif, maxTranslateX);
        } else {
          if (lastIsVisible) {
            return prev;
          }
          if (direction !== 'getNext') {
            setDirection('getNext');
          }
          return Math.max(prev + dif, minTranslateX);
        }
      });
      setPrevTouchVal(curX);
    }
  };
  const snap = (newTranslationValue: number) => {
    const durationMs = 150;
    if (innerWrapperRef.current !== null) {
      innerWrapperRef.current.style.transition = `all ${durationMs}ms ease-in`;
      setTranslateValue(newTranslationValue);
      setTimeout(() => {
        if (innerWrapperRef.current && innerWrapperRef.current.style) {
          innerWrapperRef.current.style.transition = '';
        }
      }, durationMs);
    }
  };

  useEffect(() => {
    if (innerWrapperRef.current && allowSnapping && typeof currentIndex === 'number') {
      const childWidth = innerWrapperRef.current.getBoundingClientRect().width / numChildren;
      const newTranslationValue = -(childWidth * currentIndex);
      snap(newTranslationValue);
    }
  }, [currentIndex, allowSnapping, numChildren]);

  const handleSnap = () => {
    if (innerWrapperRef.current && allowSnapping) {
      const childWidth = innerWrapperRef.current.getBoundingClientRect().width / children.length;
      const dif = translateValue % childWidth;
      const currentIndex = Math.abs(Math.ceil(translateValue / childWidth));
      if (Math.abs(dif) > childWidth / 8) {
        if (direction === 'getNext') {
          snap(-(childWidth * (currentIndex + 1)));
        } else {
          snap(-(childWidth * currentIndex));
        }
      } else {
        snap(-(childWidth * currentIndex));
      }
    }
  };

  React.useEffect(() => {
    if (!innerWrapperRef.current || !allowSnapping || !setCurIndex) return;
    const childWidth = innerWrapperRef.current.getBoundingClientRect().width / children.length;

    setCurIndex(Math.abs(Math.ceil(translateValue / childWidth)));
  }, [allowSnapping, children.length, setCurIndex, translateValue]);

  return (
    <div
      ref={carouselRef}
      onMouseMove={(e) => handleMouseMove(e)}
      onMouseUp={handleSnap}
      onTouchStart={(e) =>
        setPrevTouchVal(mode === 'HORISONTAL' ? e.touches[0].clientX : e.touches[0].clientY)
      }
      onTouchEnd={(e) => {
        handleSnap();
        setPrevTouchVal(undefined);
      }}
      onTouchMove={(e) => {
        handleTouchMove(e);
      }}
      className='w-full h-full overflow-hidden touch-none cursor-grab active:cursor-grabbing'
    >
      <div
        draggable={false}
        style={{
          transform:
            mode === 'HORISONTAL' ? `translateX(${translateValue}px)` : `translateY(${translateValue}px)`,
        }}
        className='w-fit h-full flex items-center justify-start relative'
        ref={innerWrapperRef}
      >
        {children.map((child, index) => {
          return (
            <div
              ref={index === children.length - 1 ? lastChildRef : null}
              key={`carousel-${child}-${index}`}
              className={`h-full`}
            >
              {child}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
