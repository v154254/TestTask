import { useState } from 'react';
import { getProducts } from '../../services/api';
import ProductType from '../../types/ProductType';
import Product from '../Product/Product';
import classes from './ProductList.module.css';

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
    <div className={classes.container}>
      {products?.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          name={product.name}
          image={product.colors[0].images[0]}
        />
      ))}
    </div>
  );
}

export default ProductList;
