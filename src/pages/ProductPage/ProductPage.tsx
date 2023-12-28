import { useLoaderData } from 'react-router-dom';
import ProductType, { ProductColor } from '../../types/ProductType';
import Slider from '../../components/Slider/Slider';
import classes from './ProductPage.module.css';
import { useEffect, useState } from 'react';
import SizeSelector from '../../components/SizeSelector/SizeSelector';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { SelectedProductSlice } from '../../store/reducers/SelectedProductSlice';
import ColorSelector from '../../components/ColorSelector/ColorSelector';
import { getProductColor, getSize } from '../../services/api';
import SizeType from '../../types/SizeType';
import { ShoppingCartSlice } from '../../store/reducers/ShoppingCartSlice';

function ProductPage() {
  const product = useLoaderData() as ProductType;

  const [firstRender, setFirstRender] = useState(true);
  const [colorInfo, setColorInfo] = useState<ProductColor>(product.colors[0]);
  const [sizeInfo, setSizeInfo] = useState<SizeType>();
  const { selectedProduct } = useAppSelector(
    (state) => state.SelectedProductSlice
  );
  const { setProductID, setColorID } = SelectedProductSlice.actions;
  const { addProduct } = ShoppingCartSlice.actions;
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
    getProductColor(selectedProduct.productID, selectedProduct.colorID).then(
      (color) => {
        setColorInfo(color);
      },
      (error) => {
        console.error(error);
      }
    );
    if (selectedProduct.sizeID !== 0) {
      getSize(selectedProduct.sizeID).then(
        (size) => {
          setSizeInfo(size);
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      setSizeInfo(undefined);
    }
  }, [selectedProduct]);

  return (
    <div className={classes.container}>
      <h1>{product.name}</h1>
      <Slider images={colorInfo?.images} />
      <ColorSelector availableColors={product.colors} />
      <SizeSelector availableSizes={colorInfo?.sizes} />
      <h2>Выбранный продукт:</h2>
      <p>
        {product.name}, цвет {colorInfo.name}
        {sizeInfo ? `, размер ${sizeInfo?.label}` : ''}
      </p>
      <button
        disabled={selectedProduct.sizeID === 0 ? true : false}
        onClick={() => {
          dispatch(addProduct(selectedProduct));
        }}
      >
        Добавить выбранный товар в корзину
      </button>
    </div>
  );
}

export default ProductPage;
