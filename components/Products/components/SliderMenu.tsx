import React from 'react';
import { MAIN_PAGE } from 'configs/pageData';
type SliderMenuProps = {};

const SliderMenu = ({}: SliderMenuProps) => {
  return (
    <div className={`w-full relative`}>
      <div className={`flex `}>
        {MAIN_PAGE.sliderMenu.map(([title, id], i) => {
          return <div key={`menuitem${i}`}>{title}</div>;
        })}
      </div>
    </div>
  );
};

export default SliderMenu;
