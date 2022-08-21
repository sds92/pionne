import create from 'zustand';

interface IStore {
  products: IProduct[];
  setProducts: (products: IProduct[]) => void;
  curCategory: string;
  setCurCategory: (val: string) => void;
  cart: ICartItem[];
  setCart: (cart: ICartItem[]) => void;
  getCart: () => void;
  showAddToCartPopup: boolean;
  setShowAddToCartPopup: (val: boolean) => void;
  mobileMenuIsOpen: boolean;
  setMobileMenuIsOpen: (val: boolean) => void;
}

export const useStore = create<IStore>((set) => ({
  products: [],
  setProducts: (products: IProduct[]) => set((s) => ({ ...s, products })),
  showAddToCartPopup: false,
  setShowAddToCartPopup: (val) => set((s) => ({ ...s, showAddToCartPopup: val })),
  mobileMenuIsOpen: false,
  setMobileMenuIsOpen: (val: boolean) => set((s) => ({ ...s, mobileMenuIsOpen: val })),
  // CATEGORIES
  curCategory: 'Все',
  setCurCategory: (val: string) => set((s) => ({ ...s, curCategory: val })),
  // CART
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
