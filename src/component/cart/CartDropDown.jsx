import { useContext } from 'react';
import { CartContext } from '../../context/cart';
import CartItem from './CartItem';
import Button from '../custom-element/Button';

import './cartDropDown.scss';
import { useNavigate } from 'react-router-dom';

const CartDropdown = ({ hideCart }) => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate()

  const goToCheckoutHandler = () => {
    hideCart()
    navigate('/checkout');
  };

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        )}
      </div>
      <Button onClick={goToCheckoutHandler}>CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;