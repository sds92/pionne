import { deleteOneFromCart } from 'utils';
type Props = {
  id: string;
  cart: ICartItem[];
  cb: (cart: ICartItem[]) => void;
};

const deleteAllFromCart = ({ id, cart, cb }: Props) => {
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
    _cart.splice(n, 1);
  }

  cb(_cart);
};

export default deleteAllFromCart;
