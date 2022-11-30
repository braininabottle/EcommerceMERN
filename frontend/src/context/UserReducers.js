const UserReducer = (state, action) => {

    switch( action.type){
        case 'LOGIN':
            return { user: true}
        case 'LOGOUT':
            localStorage.removeItem('user')
            return { token: null}
        case 'PROFILE':
            return { user:true}
        case 'REGISTER':
            return { user: true}
        default :
        return state
    }

    

} 

export default UserReducer