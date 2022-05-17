import { useContext } from 'react';
import ShoppingIcon from '../../assets/shopping-bag.svg?component';
import { CartContext } from '../../context/cart';


import './cartIcon.scss';

const CartIcon = ({ toggleCart }) => {
  const { cartCount } = useContext(CartContext);
  return (
    <div className='cart-icon-container' onClick={toggleCart}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{cartCount}</span>
    </div>
  );
};

export default CartIcon;