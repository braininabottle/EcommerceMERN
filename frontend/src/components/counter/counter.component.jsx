import { useState } from "react"
import './counter.style.css'

const Counter = (props) => {
    // const [count, setCount] = useState(1)

    // const increment = () => {
    //     if(count < props.maxStock){
    //         setCount(count + 1)
    //     }
    // }

    // const decrement = () => {
    //     if(count >= 2){
    //         setCount(count - 1);
    //     }
    // }

    const addToCart = () => {
        console.log('buying the product')
    }


    return(
        <div className="counterContainer d-flex align-items-center">
            {/* <button 
            onClick={decrement}
            className="btn btn-light"
            >
                -
            </button>
            <p>{count}</p>
            <button 
            onClick={increment}
            className="btn btn-light"
            >
                +
            </button> */}
            <button 
            className="btn btn-dark"
            onClick={addToCart}
            >
                AGREGAR AL CARRITO
            </button>
        </div>
        )
}

export default Counter