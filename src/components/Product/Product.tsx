function Product({ ...props }) {
  return (
    <div>
      <img
        src={props.image}
        alt="product image"
        decoding="sync"
        width="300px"
        height="400px"
      />
      <p>{props.name}</p>
    </div>
  );
}

export default Product;
