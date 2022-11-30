import '../product-box/Product-Box.styles.css'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'



const ProductBox = ({product}) => {

    const {title, imageUrl, qty,  _id} = product
    const context = useContext(CartContext)

    return(
        <div className='product-container'>
            <img src={imageUrl}/>
            <div className='customProductCartTitle'>
                <p>{title}</p>
            </div>
            <p className='customQtyBox'>{qty}</p>
            <div className='cartDeleteButton d-flex'>
                <button
                onClick={()=>context.deleteProdcutFromCart(_id)} 
                className='btn btn-dark btn-lg align-content-center'
                >eliminar</button>
            </div>
        </div>
    )
}

export default ProductBox