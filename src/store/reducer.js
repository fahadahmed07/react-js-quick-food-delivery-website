const reducer = (state = {}, action) => {
    switch (action.type) {
        case "SET_USER": {
            return { ...state, user: action.user }
        }
        case "REMOVE_USER": {
            return { ...state, user: action.user }
        }
        case "RESTAURANT_LIST": {
            return { ...state, restaurantList: action.restaurantList }
        }
        case "ORDER_REQUEST": {
            return { ...state, orderRequest: action.orderRequest }
        }
        case "MY_ORDER": {
            return { ...state, myOrder: action.myOrder }
        }
        case "MY_FOODS": {
            return { ...state, myFoods: action.myFoods }
        }
        default: {
            return state;
        }
    }
}

export default reducer;