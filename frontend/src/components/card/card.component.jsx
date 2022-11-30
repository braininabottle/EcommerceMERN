import { useContext, useState } from 'react';
import CartContext from '../../context/CartContext'
import './card.styles.css';
import { Link } from 'react-router-dom'


const Card = ({ product }) => {
  const context = useContext(CartContext)
  const [qty, setQty] = useState(1)
  const { title, price, imageUrl, stock, _id } = product;

  const decrease = () => {
    if (qty >= 2) {
      setQty(qty - 1)
    }
  }

  const increase = () => {
    if (qty < stock) {
      setQty(qty + 1)
    }
  }

  return (
    <Link to={`/product/${_id}`}>
      <div className='card-container'>
        <img
          alt={title}
          src={imageUrl}
        />
        <h3 className='card-title'>{title}</h3>
        <p className='card-price'>${price} <span className='quantity-reference'>/Prec. Unit</span></p>
        <p className='card-stock'>Productos en stock : {stock}</p>
        <div className='divButtonAddToCart'>
          <div>
            <button
              className='qtyButton btn fs-5 btn-dark text-white'
              onClick={decrease}
              disabled={qty === 1}
            >
              -
            </button>
            <span
              className='p-2 fs-5'
            >
              {qty}
            </span>
            <button
              className='qtyButton fs-5 btn btn-dark text-white'
              onClick={increase}
              disabled={qty === stock}
            >
              +
            </button>
          </div>
          <div className='mt-3'>
            <button
              className='btn btn-dark'
              onClick={() => context.addToCart(product, qty)}
            >
              AGREGAR AL CARRITO
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
