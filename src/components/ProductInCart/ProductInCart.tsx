function ProductInCart({ ...props }) {
  return (
    <div>
      {props.productID}
      {props.colorID}
      {props.sizeID}
    </div>
  );
}

export default ProductInCart;
