import React from 'react';

type Props = {
  children: React.ReactNode;
};

const InputWrapper = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default InputWrapper;
