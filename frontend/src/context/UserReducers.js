const UserReducer = (state, action) => {
    console.log(action)
    switch( action.type){
        case 'LOGIN':
            return { user: true}
            default :
            return state
    }

    

} 

export default UserReducer