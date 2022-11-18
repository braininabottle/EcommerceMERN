import { useState } from "react"
import './counter.style.css'

const Counter = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1);
    }

    return(
        <div className="counterContainer">
            <button 
            onClick={decrement}
            className="btn btn-danger"
            >
                -
            </button>
            <p>{count}</p>
            <button 
            onClick={increment}
            className="btn btn-primary"
            >
                +
            </button>
            <button 
            className="btn btn-dark"
            >
                COMPRAR
            </button>
        </div>
        )
}

export default Counter