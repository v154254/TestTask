import { useLoaderData } from 'react-router-dom';
import ProductType from '../../types/ProductType';
import Slider from '../../components/Slider/Slider';
import classes from './ProductPage.module.css';
import { useEffect, useState } from 'react';
import SizeSelector from '../../components/SizeSelector/SizeSelector';
import { useAppDispatch } from '../../hooks/redux';
import { SelectedProductSlice } from '../../store/reducers/SelectedProductSlice';

function ProductPage() {
  const product = useLoaderData() as ProductType;
  const [currentColor, setCurrentColor] = useState(product.colors[0]);

  const { setProductID } = SelectedProductSlice.actions;
  const dispatch = useAppDispatch();

  dispatch(setProductID(product.id));

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
      <SizeSelector availableSizes={currentColor.sizes} />
    </div>
  );
}

export default ProductPage;
