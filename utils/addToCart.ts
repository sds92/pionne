type Props = {
  id: string;
  cart: ICartItem[];
  cb: (cart: ICartItem[]) => void;
};

export const addToCart = ({ id, cart, cb }: Props) => {
  let n = null;
  const _cart: ICartItem[] = cart;
  const _cartItem: ICartItem = _cart.find((item, i) => {
    if (item.id === id) {
      n = i;
      return true;
    }
  }) || {
    id: id,
    amount: 1,
  };
  if (n || n === 0) {
    const __cartItem = {
      ..._cartItem,
      amount: _cartItem.amount + 1,
    };
    _cart[n] = __cartItem;
  } else {
    _cart.push(_cartItem);
  }
  cb(_cart);
};

export default addToCart