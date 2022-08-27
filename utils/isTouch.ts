export function isTouch(
  e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
) {
  if ((e as React.TouchEvent<HTMLDivElement>).touches) {
    return e as React.TouchEvent<HTMLDivElement>;
  } else {
    return undefined;
  }
}
