import { Link } from 'react-router-dom';

function Product({ ...props }) {
  return (
    <Link to={`products/${props.id}`}>
      <img
        src={props.image}
        alt="product image"
        decoding="sync"
        width="300px"
        height="400px"
      />
      <p>{props.name}</p>
    </Link>
  );
}

export default Product;
