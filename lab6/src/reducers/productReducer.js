import { ADD_PRODUCT, EDIT_PRODUCT, DELETE_PRODUCT, ADD_PRODUCT_STORE } from '../const/index';

const productReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_PRODUCT_STORE:
            action.arrProduct.forEach(item => {
                state = [...state,
                { id: item.id, name: item.name, price: item.price, image: item.image }
                ];
            });
            console.log("Add Product In Store Success:", state);
            return state;
        case ADD_PRODUCT:
            const id = new Date().getTime();
            state = [...state,
            { id: id, name: action.name, price: action.price, image: action.image }
            ];
            console.log("Add Product Success:", state);
            return state;
        case EDIT_PRODUCT:
            return state;
        case DELETE_PRODUCT:
            return state;
        default:
            return state;
    }
}
export default productReducer;