import ProductInCart from '../../components/ProductInCart/ProductInCart';
import { useAppSelector } from '../../hooks/redux';

function ShoppingCart() {
  const productsInCart = useAppSelector((state) => state.persistedReducer.cart);
  return (
    <div>
      {productsInCart?.map((product) => (
        <ProductInCart
          key={`${product.productID}${product.colorID}${product.sizeID}`}
          productID={product.productID}
          colorID={product.colorID}
          sizeID={product.sizeID}
        />
      ))}
    </div>
  );
}

export default ShoppingCart;
