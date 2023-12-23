import { useState } from 'react';
import { Link } from 'react-router-dom';

function Product({ ...props }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <Link to={`products/${props.id}`}>
      {loaded ? null : <p>Идёт загрузка, подождите...</p>}
      <img
        style={loaded ? {} : { display: 'none' }}
        onLoad={() => setLoaded(true)}
        src={props.image}
        alt="product image"
        width="300px"
        height="400px"
      />
      <p>{props.name}</p>
    </Link>
  );
}

export default Product;
