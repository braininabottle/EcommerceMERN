import UserContext from "./Usercontext";
import { useReducer } from 'react'
import UserReducer from "./UserReducers";
import axios from "axios";

const UserProvider = ({children})=> {
    const [userState, dispatch] = useReducer( UserReducer, {user: null })

    const login = () => {
        dispatch({type : 'LOGIN'})
    }

    const signIn = () => {
        dispatch({type: 'REGISTER'})
    }

    const logout = () => {
        dispatch({type: 'LOGOUT'})
    }

    const handleProfile = () => {
        dispatch({type: 'PROFILE'})
    }

    const validateToken = async () => {

        const token = localStorage.getItem('token')

        if(token){
            const response = await axios.get('http://localhost:4000/api/users/login', {
                headers: {
                    Authorization: 'Bearer' + token
                }
            })
            if(response.data.success){
                dispatch({})
            }
        }
    }
    

    return(
        <UserContext.Provider value={{userState, login, logout, handleProfile, signIn, validateToken}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider