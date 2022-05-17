import { useContext } from 'react';
import { CartContext } from '../../context/cart';
import './cartItem.scss';

const CartItem = ({ cartItem }) => {
  const { imageUrl, price, name, quantity } = cartItem;
  const { removeItemFromCart } = useContext(CartContext)
  return (
    <div className='cart-item-container' onClick={() => removeItemFromCart(cartItem)}>
      <img src={imageUrl} alt={`${name}`} />
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;