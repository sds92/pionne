type Props = {
  id: string;
  cart: ICartItem[];
  cb: (cart: ICartItem[]) => void;
};

const deleteOneFromCart = ({ id, cart, cb }: Props) => {
  let n = null;
  const _cart: ICartItem[] = cart;
  const _cartItem: ICartItem | null =
    _cart.find((item, i) => {
      if (item.id === id) {
        n = i;
        return true;
      }
    }) || null;
  if ((n || n === 0) && _cartItem) {
    const __cartItem = {
      ..._cartItem,
      amount: _cartItem.amount - 1,
    };
    if (__cartItem.amount === 0) {
      _cart.splice(n, 1);
    } else {
      _cart[n] = __cartItem;
    }
  }

  cb(_cart);
};

export default deleteOneFromCart;
