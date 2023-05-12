export const depositeMoney = (amount)=>{
    return (dispatch)=>{
        dispatch({
            type: "DEPOSIT", //Type
            payload: amount   //data
        })
    }
}

export const withdrawMoney = (amount)=>{
    return (dispatch)=>{
        dispatch({
            type: "Withdraw",
            payload: amount
        })

    }
}

export const resetValue = (amount)=>{
    return (dispatch)=>{
        dispatch({
            type:'RESET',
            payload: amount
        })
    }

}