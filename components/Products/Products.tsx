import React from 'react';
import { ProductMenu, ProductList } from './components';

type ProductProps = {
  data: IProduct[];
  comments: IComments[];
};

const Products = ({ data, comments }: ProductProps) => {
  const [w, setW] = React.useState<number | undefined>(undefined);

  React.useEffect(() => {
    const _setW = () => setW(window.innerWidth);
    _setW();
    window.addEventListener('resize', _setW);
    return () => window.removeEventListener('resize', _setW);
  }, []);

  return (
    <div className={`flex flex-col`}>
      {w && (
        <>
          <ProductMenu data={data} w={w} />
          {w > 900 && <ProductList.LG data={data} comments={comments} />}
          {w <= 900 && <ProductList.SM  data={data} comments={comments} />}
        </>
      )}
    </div>
  );
};

export default Products;
