import React from 'react';
import { SliderMenu } from './components';
type ProductsProps = {};

const Products = ({}: ProductsProps) => {
  return (
    <div className={`flex flex-col`}>
      <SliderMenu />
    </div>
  );
};

export default Products;
