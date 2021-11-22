import {ADD_TO_CART, REMOVE_ITEM,SET_TO_CART,CHANGE_QUANTITY } from '../actiontypes/action-types';

export const additionToCart = (data) => {
    // console.log(data);
    return {
        type: ADD_TO_CART,
        payLoad: data,
    }
}
export const removeItem = (data) => {
    return {
        type: REMOVE_ITEM,
        payLoad: data,
    
    }
}
export const setToCart = (data) => ({
    type: SET_TO_CART,
    payLoad: data,
});
//  export const changeQunatity