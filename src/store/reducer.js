const reducer = (state = {}, action) => {
    switch(action.type) {
        case "SET_USER": {
            return {...state, user: action.user}
        }
        // case "REMOVE_USER": {
        //     return {...state, user: null}
        // }
        // case "UPDATE_TODOS": {
        //     return {...state, todos: action.payload}
        // }
        default: {
            return state;
        }
    }
}

export default reducer;