import cartReducer from './AddToCart';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    cartReducer
});
export default rootReducer;