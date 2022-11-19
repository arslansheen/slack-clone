//action type object
export const USER_ACTION_TYPES={
CREATE_NEW_USER:'CREATE_NEW_USER',
SET_CURRENT_USER:'SET_CURRENT_USER'
}

//initial state
export const initial_state={
currentUser:null
};
//reducer
export const reducer=(state=initial_state,action)=>{
switch (action.type){
    case USER_ACTION_TYPES.SET_CURRENT_USER:
        return {...state,currentUser:action.payload}
    default:
        return state;    

}

}