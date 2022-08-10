import React from 'react';
import useIntersectionObserver from 'utils/useIntersectionObserver';
type Props = {
  children: React.ReactNode;
  setCur?: React.Dispatch<React.SetStateAction<number>>
  i: number
};

const RefComponent = ({ children, setCur, i }: Props) => {
  const divRef = React.useRef<HTMLDivElement>(null);
  const entry = useIntersectionObserver(divRef, {
    threshold: 1,
    root: null,
    rootMargin: '0%',
    freezeOnceVisible: false,
  });

  React.useEffect(() => {
    entry?.isIntersecting && setCur && setCur(i)
  }, [entry, i, setCur])

  return <div ref={divRef} className={`h-full w-full`}>{children}</div>;
};

export default RefComponent;
