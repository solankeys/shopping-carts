
import { ADD_TO_CART, REMOVE_ITEM,SET_TO_CART} from '../actiontypes/action-types';

const initialState = {
    items: [
   ],
    addedItems:[],
    total: 0

}
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
            items: [ ...state.items, action.payLoad] 
            }
        case REMOVE_ITEM:
            return {
                ...state,
                items: action.payLoad
            }
        case SET_TO_CART:
            return {
                ...state,
                items: action.payLoad
            }
        // case INCREASE_QUANTITY:
        //     return {
        //         ...state,
        //         items: action.payLoad;
        //     }
        default:
            return state
    }
}
 export default cartReducer


// const cartReducer = (state = initialState, action) => {
//     if (action.type === ADD_TO_CART) {
        
//         let addedItem = state.items.find(item => item.id === action.id)
//         let existed_item = state.addedItems.find(item => action.id === item.id)
//         if(existed_item)
//          {
//             addedItem.quantity += 1 
//              return{
//                 ...state,
//                  total: state.total + addedItem.price 
//                   }
//         }
//         else{
//             addedItem.quantity = 1;
//             //calculating the total
//             let newTotal = state.total + addedItem.price 
            
//             return{
//                 ...state,
//                 addedItems: [...state.addedItems, addedItem],
//                 total : newTotal
//             }
//         }
//     }
//     if (action.type === REMOVE_ITEM) {
//         let itemToRemove= state.addedItems.find(item=> action.id === item.id)
//         let new_items = state.addedItems.filter(item => action.id !== item.id)
//         //calculating the total
//         let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
//         console.log(itemToRemove)
//         return{
//             ...state,
//             addedItems: new_items,
//             total: newTotal
//         }
//     }

//     //INSIDE CART COMPONENT
//     if (action.type === ADD_QUANTITY) {
//         let addedItem = state.items.find(item=> item.id === action.id)
//           addedItem.quantity += 1 
//           let newTotal = state.total + addedItem.price
//           return{
//               ...state,
//               total: newTotal
//           }
//     }
//     if (action.type === SUB_QUANTITY) {
//         let addedItem = state.items.find(item => item.id === action.id)
//         if (addedItem.quantity === 1) {
//             let new_items = state.addedItems.filter(item=>item.id !== action.id)
//             let newTotal = state.total - addedItem.price
//             return{
//                 ...state,
//                 addedItems: new_items,
//                 total: newTotal
//             }
//         }
//         else {
//             addedItem.quantity -= 1
//             let newTotal = state.total - addedItem.price
//             return{
//                 ...state,
//                 total: newTotal
//             }
//         }
//     }
//     if(action.type=== ADD_SHIPPING){
//         return{
//             ...state,
//             total: state.total + 6
//         }
//     }
//     if(action.type=== 'SUB_SHIPPING'){
//         return{
//             ...state,
//             total: state.total - 6
//         }
//   }
    
//   else{
//     return state
//     }

// }

// export default cartReducer;