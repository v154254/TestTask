import { useLoaderData } from 'react-router-dom';
import ProductType from '../../types/ProductType';
import Slider from '../../components/Slider/Slider';
import classes from './ProductPage.module.css';
import { useState } from 'react';

function ProductPage() {
  const product = useLoaderData() as ProductType;
  const [currentColor, setCurrentColor] = useState(product.colors[0]);
  return (
    <div className={classes.container}>
      <h1>{product.name}</h1>
      <Slider images={currentColor.images} />
      <div>
        {product.colors?.map((color) => (
          <button onClick={() => setCurrentColor(color)} key={color.id}>
            {color.name}
          </button>
        ))}
      </div>
      <div>Sizes</div>
    </div>
  );
}

export default ProductPage;
