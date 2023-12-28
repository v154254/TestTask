import { Link, useLoaderData } from 'react-router-dom';
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
import searchProductInCart from '../../utils/searchProductInCart';

function ProductPage() {
  const product = useLoaderData() as ProductType;

  const [firstRender, setFirstRender] = useState(true);
  const [colorInfo, setColorInfo] = useState<ProductColor>(product.colors[0]);
  const [sizeInfo, setSizeInfo] = useState<SizeType>();
  const [productAlreadyInCart, setProductAlreadyInCart] = useState(false);

  const { selectedProduct } = useAppSelector(
    (state) => state.SelectedProductSlice
  );
  const productsInCart = useAppSelector((state) => state.persistedReducer.cart);
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
    if (searchProductInCart(productsInCart, selectedProduct) !== -1) {
      setProductAlreadyInCart(true);
    } else setProductAlreadyInCart(false);
  }, [selectedProduct, productsInCart]);

  return (
    <div className={classes.container}>
      <h1>{product.name}</h1>
      <Slider images={colorInfo?.images} />
      <Link to={'/'}>Назад к списку продуктов</Link>
      <ColorSelector availableColors={product.colors} />
      <SizeSelector availableSizes={colorInfo?.sizes} />
      <h2>Выбранный продукт:</h2>
      <p>
        {product.name}, цвет {colorInfo.name}
        {sizeInfo ? `, размер ${sizeInfo?.label}` : ''}
      </p>
      <button
        disabled={selectedProduct.sizeID === 0 || productAlreadyInCart === true}
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
