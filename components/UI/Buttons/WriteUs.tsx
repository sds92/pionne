import React from 'react';

type Props = {
  text: string;
  bgColor?: string;
  textColor?: string;
  onClick?: () => void;
  lg?: boolean
};

const WriteUs = ({ text, bgColor, textColor, onClick, lg }: Props) => {
  return (
    <div
      style={{ background: bgColor || '#000' }}
      className={`flex items-center justify-center border border-black rounded-full h-[54px] w-[290px] uppercase ${
        textColor ? textColor : 'text-white'
      }`}
      onClick={onClick && onClick}
    >
      {text}
    </div>
  );
};

export default WriteUs;
