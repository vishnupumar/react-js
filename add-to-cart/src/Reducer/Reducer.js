const initial ={
    comp1:"",
    comp2:""
}
export const Reducer = (state=initial,action)=>{
    switch (action.type) {
        case "comp1":
            state={
                ...state,
                comp1:action.payload
            }
            break;
        case "comp2":
            state={
                ...state,
                comp2:action.payload
            }
            break;
    
        default:
            break;
    }
    return state;
}