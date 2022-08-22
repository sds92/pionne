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
  const { setCurCategory, curCategory, mobileMenuIsOpen, isScrollign, setIsScrolling, shouldScroll } =
    useStore();
  const divRef = React.useRef<HTMLDivElement>(null);
  const [show, setShow] = React.useState<boolean>(false);
  const showBreakpoint = w > 600 ? 122 : 72;
  const isShow = useShow(divRef, showBreakpoint);

  const handleScroll = React.useCallback(
    (menuItem: string) => {
      if (document === undefined) return;
      setIsScrolling(true);

      if (menuItem.toLocaleLowerCase() === 'все') {
        const id = data[0].id.toString();
        const y = document?.getElementById(id)?.offsetTop;
        y &&
          window.scrollTo({
            top: y - 94,
            behavior: 'smooth',
          });
        setTimeout(() => {
          setIsScrolling(false);
        }, 1000);
        return;
      }

      const id = data.find((product) => product.category.toLowerCase() === menuItem.toLowerCase())?.id;
      if (!id) {
        return;
      }
      let y = document?.getElementById(id)?.offsetTop;
      if (!y) {
        y = document?.getElementById(menuItem.replaceAll(' ', '').toLocaleLowerCase())?.offsetTop;
      }
      y &&
        window.scrollTo({
          top: y - 100,
          behavior: 'smooth',
        });
      setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
      return;
    },
    [data, setIsScrolling]
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
    if (shouldScroll) {
      handleScroll(curCategory);
    }
  }, [curCategory, handleScroll, shouldScroll]);

  return (
    <>
      <div ref={divRef} className={`w-full relative ${w > 900 && `border-b`}`}>
        <div className={`flex ${w > 900 && `justify-center bg-[#fafafa]`}`}>
          {MAIN_PAGE.sliderMenu.map((menuItem, i) => {
            return (
              <div
                key={`menuItem${i}`}
                className={` ${
                  curCategory.toLocaleLowerCase() === menuItem.toLocaleLowerCase() &&
                  `border-b-[2px] border-black`
                } ${
                  w > 900 ? `${styles.menuslider_item_lg} mx-[36px]` : `${styles.menuslider_item} mx-[10px]`
                } cursor-pointer uppercase whitespace-nowrap  text-center delay-300 transition-all duration-75`}
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
                  className={`${
                    w > 900 ? `${styles.menuslider_item_lg} mx-[36px]` : `${styles.menuslider_item} mx-[10px]`
                  } ${
                    curCategory.toLocaleLowerCase() === menuItem.toLocaleLowerCase() &&
                    `border-b-[2px] border-black`
                  } cursor-pointer uppercase whitespace-nowrap mx-[10px] text-center delay-300 transition-all duration-75`}
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
