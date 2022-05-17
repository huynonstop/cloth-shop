import { useNavigate } from 'react-router-dom';
import './categoryItem.scss';

const CategoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  const navigate = useNavigate();
  return (
    <div className='category-container'>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='category-body-container'>
        <h2>{title}</h2>
        <p onClick={() => { navigate(`/shop#${title}`) }}>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;