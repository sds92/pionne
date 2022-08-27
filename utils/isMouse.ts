import { MouseEventHandler } from 'react';

export function isMouse(
  e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
) {
  if ((e as React.MouseEvent<HTMLDivElement>).clientX) {
    return e as React.MouseEvent<HTMLDivElement>;
  } else {
    return undefined;
  }
}
