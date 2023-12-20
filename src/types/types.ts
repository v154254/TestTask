interface ProductColor {
  id: number;
  name: string;
  images: string[];
  price: string;
  description: string;
  sizes: number[];
}

interface ProductType {
  id: number;
  name: string;
  colors: ProductColor[];
}

export default ProductType;
