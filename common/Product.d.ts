interface IProduct {
  id: string;
  category: string;
  images: string[];
  title: string;
  shortTitle: string;
  meta: {
    description: string[];
    keywords: string;
  };
  price: number;
  info: {
    description: string;
    v: string;
    special: string[];
    misc: {
      title: string;
      value: string;
    }[];
  };
}
