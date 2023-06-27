export const myContextReducer = (state,action)=>{
    switch (action.type) {
        case "addProducts":
            state={
                ...state,
                allProducts:action.payload
            }
            break;
        case "addtocart":
            state={
                ...state,
                cart:[...state.cart,action.payload]
            }
            break;
        case "increaseCart":
            state={
                ...state,
                cart:action.payload
            }
            break;
        case "decreaseCart":
            state={
                ...state,
                cart:action.payload
            }
            break;
        case "removeItem":
            state={
                ...state,
                cart:action.payload
            }
            break;
        default:
            break;
    }
    return state
}