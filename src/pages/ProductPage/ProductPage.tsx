import { useLoaderData } from 'react-router-dom';
import ProductType, { ProductColor } from '../../types/ProductType';
import Slider from '../../components/Slider/Slider';
import classes from './ProductPage.module.css';
import { useEffect, useState } from 'react';
import SizeSelector from '../../components/SizeSelector/SizeSelector';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { SelectedProductSlice } from '../../store/reducers/SelectedProductSlice';
import ColorSelector from '../../components/ColorSelector/ColorSelector';
import { getProductColor } from '../../services/api';

function ProductPage() {
  const product = useLoaderData() as ProductType;

  const [firstRender, setFirstRender] = useState(true);
  const [colorInfo, setColorInfo] = useState<ProductColor>(product.colors[0]);

  const { productID, colorID } = useAppSelector(
    (state) => state.SelectedProductSlice
  );
  const { setProductID, setColorID } = SelectedProductSlice.actions;
  const dispatch = useAppDispatch();

  function setInitialValues() {
    if (firstRender) {
      dispatch(setProductID(product.id));
      dispatch(setColorID(product.colors[0].id));
      setFirstRender(false);
    }
  }

  setInitialValues();

  useEffect(() => {
    getProductColor(productID, colorID).then(
      (color) => {
        setColorInfo(color);
      },
      (error) => {
        console.error(error);
      }
    );
  }, [productID, colorID]);

  return (
    <div className={classes.container}>
      <h1>{product.name}</h1>
      <Slider images={colorInfo?.images} />
      <ColorSelector availableColors={product.colors} />
      <SizeSelector availableSizes={colorInfo?.sizes} />
    </div>
  );
}

export default ProductPage;
