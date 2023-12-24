import { useLoaderData } from 'react-router-dom';
import ProductType from '../../types/ProductType';
import Slider from '../../components/Slider/Slider';
import classes from './ProductPage.module.css';
import { useEffect, useState } from 'react';
import SizeSelector from '../../components/SizeSelector/SizeSelector';

function ProductPage() {
  const product = useLoaderData() as ProductType;
  const [currentColor, setCurrentColor] = useState(product.colors[0]);
  useEffect(() => {}, [currentColor]);
  return (
    <div className={classes.container}>
      <h1>{product.name}</h1>
      <Slider images={currentColor.images} />
      <div>
        <p>Выберите цвет</p>
        {product.colors?.map((color) => (
          <button onClick={() => setCurrentColor(color)} key={color.id}>
            {color.name}
          </button>
        ))}
      </div>
      <div>
        <p>Выберите размер</p>
        <SizeSelector availableSizes={currentColor.sizes} />
      </div>
    </div>
  );
}

export default ProductPage;
