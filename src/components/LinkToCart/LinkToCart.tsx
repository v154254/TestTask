import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';
import { BsCart4 } from 'react-icons/bs';
import classes from './LinkToCart.module.css';

function LinkToCart() {
  const productsInCart = useAppSelector((state) => state.persistedReducer.cart);
  return (
    <Link className={classes.link} to={'/cart'}>
      <BsCart4 className={classes.icon} />
      <p className={classes.number}>{productsInCart.length}</p>
    </Link>
  );
}

export default LinkToCart;
