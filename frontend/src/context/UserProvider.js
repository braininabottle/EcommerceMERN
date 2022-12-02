import UserContext from "./Usercontext";
import { useReducer } from 'react'
import UserReducer from "./UserReducers";
import axios from "axios";
import Swal from 'sweetalert2'

const UserProvider = ({children})=> {
    const [userState, dispatch] = useReducer( UserReducer, {token: null, user: {name: '', lastname: '', address: {}} })

    const signUp = async (user) => {
        try {
            const response = await axios.post('http://localhost:4000/api/users', user)
            console.log(response)
            if(response.data.success){
                dispatch({ type: 'LOGIN', payload: response.data.token })
                Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Usuario creado exitosamente',
                        showConfirmButton: false,
                        timer: 1500
                        })
            }else {
                throw new Error('Usuario y/o clave no cumple con los requisitos, intente nuevamente')
            }
        } catch (error) {
            Swal.fire({
                    icon: 'error',
                    text: error.message
            })
        }
    }


    const login = async (user) => {
        try{
            const response = await axios.post('http://localhost:4000/api/users/login', user)
            if(response.data.success){
                dispatch({type : 'LOGIN', payload: response.data.token})
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Has iniciado sesión correctamente',
                    showConfirmButton: false,
                    timer: 1500
                    })
            }else {
                throw new Error('Usuario y/o clave no son correctos intente nuevamente')
            }
        }catch(error){
            Swal.fire({
                icon: 'error',
                text: error.message
        })
        }
        
    }


    const logout = () => {
        console.log('estoy en funcion logout')
        dispatch({type: 'LOGOUT'})
    }


    const validateToken = async (token) => {
        console.log(token)
            const response = await axios.get('http://localhost:4000/api/users/login', {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            })

            if(response.data.success){
                dispatch({ type: 'LOGIN', payload: token})
            }
    }

    const getUserData = async (token) => {
        try{
            const response = await axios.get('http://localhost:4000/api/users', {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            })
            console.log(response)
            if(response.data.success){
                dispatch({type: 'USERDATA', payload: response.data.user})
            }
        }catch(e){

        }
    }
    
    const editUserData = async (user) => {
        try{const response = await axios.put('http://localhost:4000/api/users', user, {
            headers: {
                Authorization: 'Bearer ' + userState.token
            }
        })
        console.log(response)
        if(response.data.success){
            dispatch({type: 'USERDATA', payload: response.data.user})
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Usuario editado exitosamente',
                showConfirmButton: false,
                timer: 1500
                })
        }else {
            throw new Error('Hubo un error, intente nuevamente más tarde')
        }
        }catch(error){
            Swal.fire({
                icon: 'error',
                text: error.message
        })
    }

    }

    return(
        <UserContext.Provider value={{userState, login, logout, signUp, validateToken, getUserData, editUserData}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider