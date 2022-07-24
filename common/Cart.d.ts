interface ICartItem {
  id: string;
  amount: number;
}

interface ICart extends Array<ICartItem> {}
