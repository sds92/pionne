import React from 'react';
import { SliderMenu, ProductList } from './components';
import { Product } from 'pages/index';

type ProductProps = {
  data: Product[];
};

const Products = ({ data }: ProductProps) => {
  return (
    <div className={`flex flex-col`}>
      {/* <SliderMenu data={data} /> */}
      <ProductList data={data} />
    </div>
  );
};

export default Products;
