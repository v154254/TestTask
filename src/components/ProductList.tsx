import { useState } from 'react';
import { getProducts } from '../services/api';
import ProductType from '../types/types';
import Product from './Product';

function ProductList() {
  const [products, setProducts] = useState<ProductType[]>();
  getProducts().then(
    (results) => {
      setProducts(results);
    },
    (error) => {
      console.error(error);
    }
  );
  return (
    <div>
      {products?.map((product) => (
        <Product
          key={product.id}
          name={product.name}
          image={product.colors[0].images[0]}
        />
      ))}
    </div>
  );
}

export default ProductList;
