import React from 'react';
import { SliderMenu, ProductList } from './components';

export interface IData {
  data: {
    id: string;
    categories: string[];
    description: string;
    price: string[];
    title: string;
  }[];
}


const Products = ({ data }: IData) => {
  return (
    <div className={`flex flex-col`}>
      <SliderMenu />
      <ProductList data={data}/>
    </div>
  );
};

export default Products;
