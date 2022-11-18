import { Link } from 'react-router-dom'
import { useContext } from 'react'
import UserContext from '../../context/Usercontext'


const Navbar = () => {

    const context = useContext(UserContext)
    console.log(context)

    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <div className="navbar-brand" href="#">Navbar</div>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse justify-content-end"
                    id="navbarNav"
                >
                    <ul className="navbar-nav">
                        {context.userState.user ? 'Hola Juanito' :<li className="nav-item">
                            <Link 
                            to='/login'
                            className="nav-link active text-white" 
                            aria-current="page" 
                            href="#">
                                Iniciar sesión
                            </Link>
                        </li>}
                        <li className="nav-item">
                            <Link 
                            to='/shop' 
                            className="nav-link text-white" 
                            href="#"
                            >
                                Tienda
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                            to='/' 
                            className="nav-link text-white" 
                            href="#"
                            >
                                Pricing
                            </Link >
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar