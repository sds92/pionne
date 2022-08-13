import create from 'zustand';

interface IStore {
  curCategory: string;
  setCurCategory: (val: string) => void;
  cart: ICartItem[];
  setCart: (cart: ICartItem[]) => void;
  getCart: () => void;
}

export const useStore = create<IStore>((set) => ({
  curCategory: 'Все',
  setCurCategory: (val: string) => set((s) => ({ s, curCategory: val })),
  cart: [],
  getCart: () => {
    if (typeof window !== 'undefined') {
      const _cart = localStorage.getItem('cart') || '[]';
      set((s) => ({ ...s, cart: JSON.parse(_cart) }));
    }
  },

  setCart: (_cart) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(_cart));
      set((s) => ({ ...s, cart: _cart.sort((a, b) => a.id.localeCompare(b.id)) }));
    }
  },
}));
