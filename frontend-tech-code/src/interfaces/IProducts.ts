interface IProducts {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
  quantity?: number;
  category?: string;
}

export default IProducts;