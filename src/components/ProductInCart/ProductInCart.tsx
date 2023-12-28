import { useState } from 'react';
import { getProduct, getProductColor, getSize } from '../../services/api';
import ProductType, { ProductColor } from '../../types/ProductType';
import SizeType from '../../types/SizeType';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import searchProductInCart from '../../utils/searchProductInCart';
import { ShoppingCartSlice } from '../../store/reducers/ShoppingCartSlice';

function ProductInCart({ ...props }) {
  const [productInfo, setProductInfo] = useState<ProductType>();
  const [colorInfo, setColorInfo] = useState<ProductColor>();
  const [sizeInfo, setSizeInfo] = useState<SizeType>();

  const productsInCart = useAppSelector((state) => state.persistedReducer.cart);
  const { removeProduct } = ShoppingCartSlice.actions;
  const dispatch = useAppDispatch();

  const product = {
    productID: props.productID,
    colorID: props.colorID,
    sizeID: props.sizeID,
  };
  const index = searchProductInCart(productsInCart, product);

  getProduct(props.productID).then(
    (product) => {
      setProductInfo(product);
    },
    (error) => {
      console.error(error);
    }
  );
  getProductColor(props.productID, props.colorID).then(
    (color) => {
      setColorInfo(color);
    },
    (error) => {
      console.error(error);
    }
  );
  getSize(props.sizeID).then(
    (size) => {
      setSizeInfo(size);
    },
    (error) => {
      console.error(error);
    }
  );
  return (
    <div>
      <img
        src={colorInfo?.images[0]}
        alt="product image"
        width="300px"
        height="400px"
      />
      <h2>{productInfo?.name}</h2>
      <p>Цвет: {colorInfo?.name}</p>
      <p>Стоимость: {colorInfo?.price}</p>
      <p>Размер: {sizeInfo?.label}</p>
      <button
        onClick={() => {
          dispatch(removeProduct(index));
        }}
      >
        Удалить
      </button>
    </div>
  );
}

export default ProductInCart;
