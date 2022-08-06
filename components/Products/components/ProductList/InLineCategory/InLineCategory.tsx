import React from 'react';

type Props = {
  title: string;
  children?: React.ReactNode;
};

const InLineCategory = ({ children, title }: Props) => {
  return (
    <div className={`flex flex-col ml-[calc((100%-1278px)/2)]`}>
      <div>{title}</div>
      <div className={`flex`}>{children}</div>
    </div>
  );
};

export default InLineCategory;
