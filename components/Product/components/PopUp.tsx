import React from 'react';
import { SVGLocal } from './';

type PopUpProps = {
  title: string;
  value: string;
};

const PopUp = ({ title, value }: PopUpProps) => {
  const [open, setOpen] = React.useState<boolean>(false);
  return (
    <div className={`flex flex-col`}>
      <div className={`flex items-center justify-between border-b py-2`} onClick={() => setOpen(!open)}>
        <div className={`uppercase`}>{title}</div>
        {<SVGLocal.Plus className={`${open ? 'rotate-45' : ''} transition-all`} />}
      </div>
      <div className={`${!open ? 'max-h-0' : 'max-h-screen'} my-2 transition-all overflow-hidden`}>{value}</div>
    </div>
  );
};

export default PopUp;
