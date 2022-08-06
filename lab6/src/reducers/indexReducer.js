import {combineReducers} from 'redux';
import priceReducer from './priceReducer';
import productReducer from './productReducer';

export default combineReducers({
    product: productReducer,
    changePrice: priceReducer
})