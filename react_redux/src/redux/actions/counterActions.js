import * as actionTypes from "./actionsType"

export const increaseCounter=()=>({
    type:actionTypes.INCREASE_BY_TWO_COUNTER,
    payload : 1
})


export const decreaseCounter=()=>({
    type:actionTypes.DECREASE_COUNTER,
    payload : 1
})


export const increaseByTwoCounter=()=>({
    type:actionTypes.INCREASE_BY_TWO_COUNTER,
    payload : 2
})