import { UI } from 'components';
import Image from 'next/image';
import React from 'react';
import { useStore } from 'store/useStore';
import { addToCart } from 'utils';
import { useInView } from 'react-intersection-observer';

type Props = {
  product: IProduct;
  setFirstLast: React.Dispatch<React.SetStateAction<'first' | 'last' | 'center'>>;
  pos: number;
  l: number;
};

const InLineCategoryItem = ({ product, setFirstLast, pos, l }: Props) => {
  const { cart, setCart } = useStore();
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  const handleAddToCart = () => {
    addToCart({ id: product.id, cart: cart, cb: setCart });
  };

  React.useEffect(() => {
    if (pos === 1) {
      inView ? setFirstLast('first') : setFirstLast('center');
      return
    }
    if (pos === l - 1) {
      inView ? setFirstLast('last') : setFirstLast('center');
      return
    }
  }, [inView, l, pos, setFirstLast]);
  return (
    <div ref={ref} className={`flex flex-col w-[338px] mr-[144px]`}>
      {pos}
      <div className={`relative w-[338px] h-[330px] rounded-[30px] overflow-hidden`}>
        <Image alt={``} src={product.images[0]} layout={`fill`} objectFit={`cover`} />
      </div>
      <div>{product.title}</div>
      <div>{product.info.description}</div>
      <div className={`flex`}>
        <div>{product.price}</div>
        <UI.Buttons.AddToCart
          onClick={handleAddToCart}
          bgColor={`transparent`}
          textColor={`black`}
          lg={true}
        />
      </div>
    </div>
  );
};

export default InLineCategoryItem;
