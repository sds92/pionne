import React from 'react';

import Link from 'next/link';
import useWindowSize from 'utils/useWindowSize';
import MobileSlider from 'components/Slider/MobileSlider';
import { Separator } from './';
import { useInView } from 'react-intersection-observer';
import { useStore } from 'lib/store';
import styles from '../Products.module.css';

type ProductListItemProps = {
  i: number;
  product: IProduct;
  comments: IComments[];
};

const ProductListItem = ({ product, i, comments }: ProductListItemProps) => {
  const { curCategory, setCurCategory } = useStore();
  const { width } = useWindowSize();
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  React.useEffect(() => {
    if (inView) {
      () => setCurCategory(product.category);
    }
  }, [inView]);

  return (
    <>
      <div id={product.id.toString()} ref={ref} key={`product${i}`} className={`flex flex-col gap-4 py-4`}>
        {width < 640 && <MobileSlider id={product.id} images={product.images} />}

        <Link href={`products/${product.id}`} passHref>
          <div className={`${styles.product_title} px-4`}>{product.title}</div>
        </Link>
        <div className={`${styles.product_description} px-4`}>{product.info.description}</div>
        <div className={`flex w-full justify-between items-center border-b pb-8 px-4`}>
          <div className={`${styles.product_price}`}>{product.price}&nbsp;р</div>
          <div className={`${styles.product_to_cart} rounded-full px-8 py-4 bg-black cursor-pointer`}>
            В корзину
          </div>
        </div>
        {i === 1 && <Separator id={1} />}
        {i === 3 && <Separator id={2} data={comments} />}
      </div>
    </>
  );
};

export default ProductListItem;
