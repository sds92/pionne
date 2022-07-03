import { useState } from 'react';
import useEventListener from './useEventListener';
import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect';

function useShow(ref: React.RefObject<HTMLDivElement>, breakpoint: number): boolean | undefined {
  const [show, setShow] = useState<boolean | undefined>(undefined);

  const handleShow = () => {
    if (ref.current) {
      var rect = ref.current.getBoundingClientRect();
      if (rect.y <= breakpoint) {
        setShow(true);
      } else {
        setShow(false)
      }
    }
  };

  useEventListener('scroll', handleShow);
  useIsomorphicLayoutEffect(() => {
    handleShow();
  }, []);

  return show;
}

export default useShow;
