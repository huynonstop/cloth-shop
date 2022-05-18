import { useContext } from 'react';

import { CartContext } from '../../context/cart';

import CheckoutItem from './CheckoutItem';

import './checkout.scss';
import Button from '../../component/custom-element/Button';
import { UserContext } from '../../context/user';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cartItems, cartTotal, checkout } = useContext(CartContext);
  const { currentUser } = useContext(UserContext)
  const navigate = useNavigate();
  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className='total'>TOTAL: ${cartTotal}</div>
      <div className='total'>{
        currentUser ?
          (cartItems.length ? <Button onClick={() => checkout()}>Place order</Button> : <></>) :
          <Button onClick={() => navigate('/auth')}>Please login to Finish your order</Button>
      }</div>
    </div >
  );
};

export default Checkout;