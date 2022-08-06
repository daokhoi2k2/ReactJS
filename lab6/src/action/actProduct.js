import { ADD_PRODUCT_STORE, ADD_PRODUCT, CHANGE_PRICE } from "../const/index";
//action đưa sách vào store
export const actAddProduct = (name, price, image) => {
    return { type: ADD_PRODUCT, name, image, price };
};
export const actAddProductStore = (arrProduct) => {
    return { type: ADD_PRODUCT_STORE, arrProduct, };
};

export const actChangePrice = (currency) => {
    return { type: CHANGE_PRICE, currency, };
};
