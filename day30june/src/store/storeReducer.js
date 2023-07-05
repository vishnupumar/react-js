let initialVal = {
    cart:[]
}

export const storeReducer = (state=initialVal,action)=>{
    switch (action.type) {
        case "addtocart":
            state = {
                ...state,
                cart: [...state.cart,{...action.payload,quantity:1}]
            }
            break;
        case "removecart":{
            const newCart = state.cart.filter((ele)=>{
                return ele.id !== action.payload
              })
            state = {
                ...state,
                cart: [...newCart]
            }
            break;
        }
        case "increaseQuantity":{
            const newCart = state.cart.map((ele)=>{
                if(ele.id === action.payload){
                    return  {...ele,quantity:ele.quantity+1}
                }
                return ele;
              })
            state = {
                ...state,
                cart: [...newCart]
            }
            break;
        }
        case "decreaseQuantity":{
            const newCart = state.cart.map((ele)=>{
                if(ele.id === action.payload){
                    return  {...ele,quantity:ele.quantity-1}
                }
                return ele
              })
            state = {
                ...state,
                cart: [...newCart]
            }
            break;
        }
        default:
            break;
    }
    return state;
}