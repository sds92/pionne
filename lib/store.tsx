import create from 'zustand';

type State = {
  curCategory: string;
  setCurCategory: (val: string) => void;
};

export const useStore = create<State>((set) => ({
  curCategory: '',
  setCurCategory: (val: string) => set((s) => ({ s, curCategory: val })),
}));
