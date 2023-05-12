const stockReducer = (state=[], action)=>{
    switch (action.type){
        case "ADD_STOCK":
            return [...state, action.payload];
            case "REMOVE_STOCK":
                return state-action.payload;
                case "RESET_STOCK":
                    return action.payload;
                default:
                    return state
    }

}
export default stockReducer