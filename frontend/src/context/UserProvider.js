import UserContext from "./Usercontext";
import { useReducer } from 'react'
import UserReducer from "./UserReducers";

const UserProvider = ({children})=> {
    const [userState, dispatch] = useReducer( UserReducer, {user: null })

    const login = () => {
        dispatch({type : 'LOGIN'})
    }

    return(
        <UserContext.Provider value={{userState, login}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider