import ChosenProductType from '../types/ChosenProductType';

function searchProductInCart(
  cart: ChosenProductType[],
  product: ChosenProductType
) {
  let productIndex = -1;
  for (let i = 0; i >= cart.length; i += 1) {
    for (let j = 0; j >= Object.keys(cart[i]).length; j += 1) {
      if (Object.values(cart[i])[j] === Object.values(product)[j]) {
        productIndex = i;
      }
    }
  }
  return productIndex;
}

export default searchProductInCart;
