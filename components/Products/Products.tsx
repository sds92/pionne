import React from 'react';
import { SliderMenu, ProductList } from './components';

type ProductProps = {
  data: IProduct[];
  comments: IComments[];
};

const Products = ({ data, comments }: ProductProps) => {
  return (
    <div className={`flex flex-col`}>
      <SliderMenu data={data} />
      <ProductList data={data} comments={comments}/>
    </div>
  );
};

export default Products;
