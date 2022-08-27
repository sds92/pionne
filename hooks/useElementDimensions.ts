import { RefObject, useState, useEffect } from 'react';
import useWindowSize from './useWindowSize';

interface DimensionsRect {
  bottom: number;
  height: number;
  left: number;
  right: number;
  top: number;
  x: number;
  y: number;
  width: number;
}

export const useElementDimensions = (
  ref: RefObject<Element>
): DimensionsRect => {
  const { width: windowWidth } = useWindowSize();
  const [rect, setRect] = useState<DimensionsRect>({
    bottom: 0,
    height: 0,
    left: 0,
    right: 0,
    top: 0,
    x: 0,
    y: 0,
    width: 0,
  });

  useEffect(() => {
    if (ref.current) {
      setRect(ref.current.getBoundingClientRect());
    }
  }, [ref, windowWidth]);
  return rect;
};
