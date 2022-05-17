import ProductCard from '../../component/product/ProductCard';
import './shop.scss';
import { products, SHOP_DATA } from './product-data'

const Shop = () => {
  return (
    <>
      {
        SHOP_DATA.map(({ title, items }) => {
          return (
            <div className='category' id={title.toLowerCase()}>
              <h2>{title}</h2>
              <div className='products-container'>
                {items.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          )
        })
      }
    </>
  );
};

export default Shop;