import { useState } from "react"
import alcohol2 from '../../assets/alcohol2.jpg'
import alcohol3 from '../../assets/alcohol3.jpg'
import alcohol4 from '../../assets/alcohol4.jpg'
import './login.styles.css';
import axios from 'axios'
import UserContext from "../../context/Usercontext";
import { useContext} from 'react'


const Login = () => {
    const [register, setRegister] = useState(false)
    const [user, setUser] = useState({})
    
    const context = useContext(UserContext)
    console.log(context)

    const signIn = () => {
        console.log('sign in')
    }

    const createAccount = async () => {
        try{
            const response = await axios.post('http://localhost:4000/api/users', user )
            console.log(response.data) 
            console.log('create account')
            context.login()
            //agregar una alerta aquí
            //setRegister(false)
        }catch(error){
            console.log(error.message)
        }
    }

    const handleRegister = (event) => {
        event.preventDefault()
        if(register){
            createAccount()
        }else{
            signIn()
        }
    }

    const handleInput = (e) => {
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    } 
    
    




    return (

        <div className="row container p-4">
            <div className="col-md-8">
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={alcohol3} alt="..." className='image-size' />
                        </div>
                        <div className="carousel-item">
                            <img src={alcohol2} alt="..." className='image-size' />
                        </div>
                        <div className="carousel-item">
                            <img src={alcohol4} alt="..." className='image-size' />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            {/* {formulario} */}
            <div className="col-md-4">
                <div className="mt-5 ms-5"></div>
                {/* render condicional */}
                <h1 className="mb-3">{register ? 'Registrarse' : 'Iniciar sesión'}</h1>
                <form>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="">Email:</label>
                        <input 
                        name="email"
                        type="email" 
                        className="form-control" 
                        placeholder="Escribe tu email" 
                        id="email"
                        onChange={(e)=> handleInput(e)} 
                        required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="">Contraseña:</label>
                        <input 
                        name="password"
                        type="password" 
                        className="form-control" 
                        placeholder="Escribe tu contraseña" 
                        id="contraseña"
                        onChange={(e)=> handleInput(e)}
                        required />
                    </div>
                    <button 
                    className="btn btn-primary" 
                    type="submit"
                    onClick={(event)=>handleRegister(event)}
                    >
                        {register ? 'Registrarse' : 'Iniciar sesión'}
                    </button>
                </form>
                {/* actualizar estado */}
                <div className="form-group">
                     <button 
                     className="btn btn-secondary mt-4 form-control"
                     onClick={()=>setRegister(!register)}
                     >   
                     {register ? 'Estas registrado? Inicia sesión' : 'No estas registrado? Registrate'}
                     </button>
                </div>
            </div>
         </div>   
           
        )
}

 export default Login