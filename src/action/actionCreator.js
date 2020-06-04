import { ADD_INGREDIENT, REMOVE_INGREDIENT } from "./actionType"
export const addingredient = (price) =>{
    return ({
        type:ADD_INGREDIENT,
        payload:price
    })
}
export const removeingredient = (price) =>{
    return ({
        type:REMOVE_INGREDIENT,
        payload:price
    })
}