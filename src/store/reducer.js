const reducer = (state = {}, action) => {
    switch(action.type) {
        case "SET_USER": {
            return {...state, user: action.user}
        }
        case "REMOVE_USER": {
            return {...state, user: action.user}
        }
        case "RESTAURANT_LIST": {
            return {...state, restaurantList: action.restaurantList}
        }
        default: {
            return state;
        }
    }
}

export default reducer;