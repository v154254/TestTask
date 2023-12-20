interface ProductColor {
  id: number;
  name: string;
  images: string[];
  price: string;
  description: string;
  sizes: number[];
}

interface Product {
  id: string;
  name: string;
  color: ProductColor[];
}

export default Product;
