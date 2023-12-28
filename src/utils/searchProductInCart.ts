import ChosenProductType from '../types/ChosenProductType';

function searchProductInCart(
  cart: ChosenProductType[],
  product: ChosenProductType
) {
  let objectIsFound = false;
  for (const item of cart) {
    for (let i = 0; i >= cart.length; i += 1) {
      if (Object.values(item)[i] === Object.values(product)[i]) {
        objectIsFound = true;
      }
    }
  }
  return objectIsFound;
}

export default searchProductInCart;
