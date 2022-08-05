import React from 'react';
import { MAIN_PAGE } from 'configs/pageData';
import { useStore } from 'lib/store';
import useShow from 'utils/useShow';

import styles from '../../Products.module.css';

type SliderMenuProps = {
  data: IProduct[];
};

const SliderMenu = ({ data }: SliderMenuProps) => {
  const { setCurCategory } = useStore();
  const divRef = React.useRef<HTMLDivElement>(null);
  const [show, setShow] = React.useState<boolean>(false);
  const isShow = useShow(divRef, 72);

  const handleScroll = (menuItem: string) => {
    if (menuItem.toLocaleLowerCase() === 'все') {
      const id = data[0].id.toString();
      const y = document?.getElementById(id)?.offsetTop;
      y &&
        window.scrollTo({
          top: y - 100,
          behavior: 'smooth',
        });
      return;
    }
    if (document !== undefined) {
      const id = data.find((product) => product.category.toLowerCase() === menuItem.toLowerCase())?.id;
      if (!id) return
      const y = document?.getElementById(id)?.offsetTop;
      y &&
        window.scrollTo({
          top: y - 100,
          behavior: 'smooth',
        });
    }
  };

  React.useEffect(() => {
    if (isShow) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [isShow]);

  return (
    <>
      <div ref={divRef} className={`w-full relative`}>
        <div className={`flex gap-4`}>
          {MAIN_PAGE.sliderMenu.map((menuItem, i) => {
            return (
              <div
                key={`menuItem${i}`}
                className={`${styles.menuslider_item} cursor-pointer uppercase whitespace-nowrap`}
                onClick={() => {
                  setCurCategory(menuItem);
                  handleScroll(menuItem);
                }}
              >
                {menuItem}
              </div>
            );
          })}
        </div>
      </div>
      {show && (
        <div className={`w-full z-50 fixed top-[72px] bg-white`}>
          <div className={`flex gap-4`}>
            {MAIN_PAGE.sliderMenu.map((menuItem, i) => {
              return (
                <div
                  key={`menuitem${i}`}
                  className={`${styles.menuslider_item} cursor-pointer uppercase whitespace-nowrap`}
                  onClick={() => {
                    setCurCategory(menuItem);
                    handleScroll(menuItem);
                  }}
                >
                  {menuItem}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default SliderMenu;
