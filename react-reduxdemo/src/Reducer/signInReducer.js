const signInReducer = (state = 'signIn', action) => {
    switch(action.type){
        case 'SIGNIN':
            return state = 'signed-In';
        default:
            return state;
    }
}
export default signInReducer;