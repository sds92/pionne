import React from 'react';
import { BreadCrumbs, Svg, UI, Comments } from 'components';
import { SVGLocal, PopUp } from './components';
import MobileSlider from 'components/Slider/MobileSlider';
import useWindowSize from 'utils/useWindowSize';
import styles from './Product.module.css';
import Image from 'next/image';
import { useStore } from 'store/useStore';
import { addToCart } from 'utils';
import { comments } from 'data/comments';

import { LG, SM } from './';

type ProductProps = {
  data: IProduct;
};

const Product = ({ data }: ProductProps) => {
  const { width } = useWindowSize();

  return width > 640 ? <LG data={data} /> : <SM data={data} />;
};

export default Product;
