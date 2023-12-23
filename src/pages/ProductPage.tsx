import { useLoaderData } from 'react-router-dom';
import ProductType from '../types/types';
import Slider from '../components/Slider/Slider';
import classes from './ProductPage.module.css';

function ProductPage() {
  const product = useLoaderData() as ProductType;
  return (
    <div className={classes.container}>
      <h1>{product.name}</h1>
      <Slider images={product.colors[0].images} />
      <div>Colors</div>
      <div>Sizes</div>
    </div>
  );
}

export default ProductPage;
