import { useEffect, useState } from 'react';
import { Transition, TransitionStatus } from 'react-transition-group';

interface Props {
  children: React.ReactNode[] | React.ReactNode;
  shouldRender?: boolean;
  propsClassName?: string;
  delayMs?: number;
  animationDuration?: number;
}

const Fade = ({
  children,
  shouldRender,
  propsClassName,
  delayMs,
  animationDuration,
}: Props) => {
  const duration =
    typeof animationDuration === 'number' ? animationDuration : 200;

  const defaultStyle = {
    transition: `all ${duration}ms ease-in`,
    opacity: 0,
  };

  const transitionStyles: {
    [a in TransitionStatus]: {
      opacity: number;
    };
  } = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
    unmounted: {
      opacity: 0,
    },
  };

  return (
    <Transition
      mountOnEnter={true}
      unmountOnExit={true}
      timeout={shouldRender ? 0 : duration}
      in={shouldRender}
      appear={shouldRender}
    >
      {(state) => (
        <div
          className={propsClassName}
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
            transitionDelay: `${delayMs || 0}ms`,
          }}
        >
          {children}
        </div>
      )}
    </Transition>
  );
};

export default Fade;
