import './productCard.scss';

import Button from '../custom-element/Button';
import { useContext } from 'react';
import { CartContext } from '../../context/cart';

const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);
  const { name, price, imageUrl } = product;
  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button buttonType='inverted' onClick={() => { addItemToCart(product) }}>Add</Button>
    </div>
  );
};

export default ProductCard;