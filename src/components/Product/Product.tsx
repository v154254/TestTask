function Product({ ...props }) {
  return (
    <div>
      <img src={props.image} alt="product image" />
      <p>{props.name}</p>
    </div>
  );
}

export default Product;
