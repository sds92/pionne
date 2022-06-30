import React from 'react';
import clsx from 'clsx';

interface ToggleProps {
  isOn: boolean;
  onClick: () => void;
  className?: string;
}

const Toggle = ({ className, isOn, onClick }: ToggleProps) => {
  return (
    <div
      onClick={onClick}
      className={
        'h-[16px] w-[32px]  p-[2px] rounded-[24px] cursor-pointer transition-colors ' + className && className
      }
    >
      <div
        className={clsx(
          {
            'transform: translate-x-[16px]': isOn,
            'transform: translate-x-[0px]': !isOn,
          },
          'bg-white left-0 rounded-full h-[12px] w-[12px] transition-all'
        )}
      />
    </div>
  );
};

export default Toggle;
