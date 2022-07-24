import { Icons } from 'components/Svg';
import React from 'react';

type Props = {
    
};

const CartItem = ({}: Props) => {
  return (
    <div className={`flex flex-col`}>
      <div className={`flex`}>
        <div>Image</div>
        <div className={`flex flex-col`}></div>
        <div>
          <Icons.Close />
        </div>
      </div>

      <div className={`flex`}>
        <div className={`rounded-full border flex`}>
        <div><Icons.Minus/></div>
        <div></div>
        <div><Icons.Plus/></div>
        </div>
        <div>Price</div>
      </div>
    </div>
  );
};

export default CartItem;
