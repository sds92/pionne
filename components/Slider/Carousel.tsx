import useIntersectionObserver from 'utils/useIntersectionObserver';
import React, { memo, MouseEvent, TouchEvent, useEffect, useMemo, useRef, useState } from 'react';

const Carousel = ({
  children,
  mode = 'HORISONTAL',
  allowSnapping = false,
  currentIndex,
  getCurIndex,
}: {
  children?: React.ReactNode;
  mode?: 'HORISONTAL' | 'VERTICAL';
  allowSnapping?: boolean;
  currentIndex?: number;
  getCurIndex?: (a: number) => void;
}) => {
  const [curIndex, setCurIndex] = React.useState<number>(currentIndex || 0);
  const [translateValue, setTranslateValue] = useState(0);
  const [direction, setDirection] = useState<'getNext' | 'getPrev'>('getPrev');
  const maxTranslateX = 0;
  const numChildren = useMemo(() => {
    return (children as [])?.length;
  }, [children]);
  // const [currentIndex, setCurrentIndex] = useState(0);

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
  const snap = async (newTranslationValue: number) => {
    const durationMs = 150;
    if (innerWrapperRef.current) {
      innerWrapperRef.current.style.transition = `all ${durationMs}ms ease-in`;
      setTranslateValue(newTranslationValue);
      await new Promise((r) => setTimeout(r, durationMs));
      innerWrapperRef.current.style.transition = '';
    }
  };

  useEffect(() => {
    if (innerWrapperRef.current && allowSnapping && typeof curIndex === 'number') {
      const childWidth = innerWrapperRef.current.getBoundingClientRect().width / (numChildren || 1);
      const newTranslationValue = -(childWidth * curIndex);
      snap(newTranslationValue);
    }
  }, [curIndex, allowSnapping, numChildren]);

  const handleSnap = () => {
    if (innerWrapperRef.current && allowSnapping) {
      const childWidth = innerWrapperRef.current.getBoundingClientRect().width / ((children as [])?.length || 1);
      const dif = translateValue % childWidth;
      const currentIndex = Math.abs(Math.ceil(translateValue / childWidth));
      setCurIndex(Math.abs(Math.ceil(translateValue / childWidth)));
      getCurIndex && getCurIndex(curIndex);
      if (Math.abs(dif) > childWidth / 8) {
        if (direction === 'getNext') {
          snap(-(childWidth * (curIndex + 1)));
        } else {
          snap(-(childWidth * curIndex));
        }
      } else {
        snap(-(childWidth * curIndex));
      }
    }
  };

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
      className='w-full overflow-hidden touch-none cursor-grab active:cursor-grabbing'
    >
      <div
        draggable={false}
        style={{
          transform:
            mode === 'HORISONTAL' ? `translateX(${translateValue}px)` : `translateY(${translateValue}px)`,
        }}
        className='w-fit h-fit flex items-center justify-start relative'
        ref={innerWrapperRef}
      >
        {(children as [])?.map((child, index) => {
          return (
            <div
              ref={index === ((children as [])?.length || 1) - 1 ? lastChildRef : null}
              // @ts-ignore
              key={`carousel-${(child).key}-${index}`}
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
