import { CHANGE_PRICE } from '../const/index';

const priceReducer = (state = [], action) => {
    switch (action.type) {
        case CHANGE_PRICE:
            state = { currency: action.currency }
            console.log("Change Currency Success:", state);
            return state;
        default:
            return state;
    }
}
export default priceReducer;