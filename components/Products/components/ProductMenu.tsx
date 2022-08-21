import React from 'react';
import { MAIN_PAGE } from 'configs/pageData';
import { useStore } from 'store/useStore';
import useShow from 'utils/useShow';

import styles from '../Products.module.css';

type SliderMenuProps = {
  data: IProduct[];
  w: number;
};

const ProductMenu = ({ data, w }: SliderMenuProps) => {
  const { setCurCategory, curCategory, mobileMenuIsOpen } = useStore();
  const divRef = React.useRef<HTMLDivElement>(null);
  const [show, setShow] = React.useState<boolean>(false);
  const showBreakpoint = w > 600 ? 122 : 72;
  const isShow = useShow(divRef, showBreakpoint);

  const handleScroll = React.useCallback(
    (menuItem: string) => {
      if (menuItem.toLocaleLowerCase() === 'все') {
        const id = data[0].id.toString();
        const y = document?.getElementById(id)?.offsetTop;
        y &&
          window.scrollTo({
            top: y - 94,
            behavior: 'smooth',
          });
        return;
      }
      if (document !== undefined) {
        const id = data.find((product) => product.category.toLowerCase() === menuItem.toLowerCase())?.id;
        if (!id) return;
        const y = document?.getElementById(id)?.offsetTop;
        y &&
          window.scrollTo({
            top: y - 100,
            behavior: 'smooth',
          });
      }
    },
    [data]
  );

  React.useEffect(() => {
    if (isShow) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [isShow]);

  React.useEffect(() => {
    if (!curCategory) return;
    handleScroll(curCategory);
  }, [curCategory, handleScroll]);

  return (
    <>
      <div ref={divRef} className={`w-full relative ${w > 900 && `border-b`}`}>
        <div className={`flex ${w > 900 && `justify-center bg-[#fafafa]`}`}>
          {MAIN_PAGE.sliderMenu.map((menuItem, i) => {
            return (
              <div
                key={`menuItem${i}`}
                className={`${styles.menuslider_item} ${
                  curCategory.toLocaleLowerCase() === menuItem.toLocaleLowerCase() &&
                  `border-b-[2px] border-black`
                } cursor-pointer uppercase whitespace-nowrap mx-[10px] text-center`}
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
      {show && !mobileMenuIsOpen && (
        <div style={{ top: `${showBreakpoint}px` }} className={`w-full z-40 fixed bg-white shadow-md`}>
          <div className={`flex ${w > 900 && `justify-center bg-[#fafafa]`}`}>
            {MAIN_PAGE.sliderMenu.map((menuItem, i) => {
              return (
                <div
                  key={`menuitem${i}`}
                  className={`${styles.menuslider_item} ${styles.menuslider_item} ${
                    curCategory === menuItem && `border-b-[2px] border-black`
                  } cursor-pointer uppercase whitespace-nowrap mx-[10px] text-center`}
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

export default ProductMenu;
