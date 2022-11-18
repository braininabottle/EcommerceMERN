import './card.styles.css';
import Counter from '../counter/counter.component'

const Card = ({ product }) => {
  const { title, price, imageUrl, stock } = product;

  return (
    <div className='card-container'>
      <img
        alt={title}
        src={imageUrl}
      />
      <h3 className='card-title'>{title}</h3>
      <p className='card-price'>${price}</p>
      <p className='card-stock'>Productos en stock : {stock}</p>
      < Counter />    
    </div>
  );
};

export default Card;
