import React, { MouseEvent, TouchEvent, useRef, useState } from 'react';

const Carousel = ({
  children,
  mode = 'HORISONTAL',
  allowSnapping = false,
}: {
  children: React.ReactNode;
  mode?: 'HORISONTAL' | 'VERTICAL';
  allowSnapping?: boolean;
}) => {
  const [translateValue, setTranslateValue] = useState(0);
  const [direction, setDirection] = useState<'getNext' | 'getPrev'>('getPrev');
  const maxTranslateX = 0;

  const carouselRef = useRef<HTMLDivElement>(null);
  const innerWrapperRef = useRef<HTMLDivElement>(null);

  // handler for mouse
  const handleMouseMove = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    const carouselRect = carouselRef.current?.getBoundingClientRect();
    const innerWrapperRect = innerWrapperRef.current?.getBoundingClientRect();
    if (e.buttons === 1 && carouselRect && innerWrapperRect) {
      const minTranslateX =
        innerWrapperRect.width > carouselRect.width ? -(innerWrapperRect.width - carouselRect.width) : 0;
      // if (innerWrapperRef.current) {
      //   const childWidth =
      //     innerWrapperRef.current.getBoundingClientRect().width /
      //     children.length;

      //   const dif = translateValue % childWidth;
      //   console.log(dif);
      // }

      setTranslateValue((prev) => {
        if (e.movementX > 0) {
          if (direction !== 'getPrev') {
            setDirection('getPrev');
          }
          return Math.min(prev + e.movementX, maxTranslateX);
        } else {
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
      const dif = curX - prevTouchVal;

      setTranslateValue((prev) => {
        if (dif > 0) {
          if (direction !== 'getPrev') {
            setDirection('getPrev');
          }
          return Math.min(prev + dif, maxTranslateX);
        } else {
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
    const durationMs = 200;
    if (innerWrapperRef.current) {
      innerWrapperRef.current.style.transition = `all ${durationMs}ms ease-in`;
      setTranslateValue(newTranslationValue);
      await new Promise((r) => setTimeout(r, durationMs));
      innerWrapperRef.current.style.transition = '';
    }
  };

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
      onTouchMove={(e) => handleTouchMove(e)}
      className='overflow-hidden w-full '
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
        {children}
      </div>
    </div>
  );
};

export default Carousel;
