import { Icons } from 'components/Svg';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useStore } from 'store/useStore';
import styles from '../../../Products.module.css';

type Props = {
  title: string;
  children?: React.ReactNode;
  l: number;
  arrowBlock: {
    first: boolean;
    last: boolean | undefined;
  };
};

const InLineCategory = ({ children, title, l, arrowBlock }: Props) => {
  const { curCategory, setCurCategory, cart, setCart, isScrollign, setShouldScroll } = useStore();
  const [curProduct, setCurProduct] = React.useState<number>(0);
  const [curPosition, setCurPosition] = React.useState<number>(0);
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.8,
  });

  const handleArrowClick = (val: string) => {
    if (val === '+' && !arrowBlock.last) {
      if (curProduct < l - 1) {
        setCurProduct((s) => s + 1);
      } else {
        setCurProduct(0);
      }
    }
    if (val === '-' && !arrowBlock.first) {
      if (curProduct > 0) {
        setCurProduct((s) => s - 1);
      } else {
        setCurProduct(l - 1);
      }
    }
  };

  const divRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!divRef.current) return;
    const step = divRef.current.getBoundingClientRect().width / l;
    setCurPosition(step * (curProduct + 1));
  }, [curPosition, curProduct, l]);

  React.useEffect(() => {
    // console.log("🚀 ~ file: title", title)
    console.log("🚀 ~ file: InLineCategory.tsx ~ line 54 ~ React.useEffect ~ inView", inView)
    if (inView) {
      setShouldScroll(false);
      !isScrollign && setCurCategory(title);
    }
  }, [inView, isScrollign, setCurCategory, setShouldScroll, title]);

  return (
    <div id={title.replaceAll(' ', '').toLocaleLowerCase()} ref={ref} className={`flex flex-col ml-[calc((100%-1278px)/2)] bg-white overflow-hidden`}>
      <div className={`flex items-center justify-between mr-[calc((100%-1278px))] mt-[120px]`}>
        <div className={`${styles.inline_category_title}`}>{title}</div>
        <div className={`flex items-center `}>
          <div className={`cursor-pointer`} onClick={() => handleArrowClick('-')}>
            <Icons.ArrowLeft />
          </div>
          <div className={`ml-[20px] cursor-pointer`} onClick={() => handleArrowClick('+')}>
            <Icons.ArrowRight />
          </div>
        </div>
      </div>
      <div className={`relative w-full mt-[40px]  h-[calc(100vh-100px)]`}>
        <div
          ref={divRef}
          style={{ transform: `translateX(${-curPosition}px)` }}
          className={`absolute flex transition-all`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default InLineCategory;
