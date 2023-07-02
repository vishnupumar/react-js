let inintialVal = {
    themeMode : ""
}

export const storeReducer = (state=inintialVal,action)=>{
    switch (action.type) {
        case "dark":
            state={
                themeMode : "dark"
            }
            break;
        case "light":
            state={
                themeMode : "light"
            }
            break;
    
        default:
            break;
    }
    return state;
}