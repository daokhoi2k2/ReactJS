import { THEM_LOAISACH, CHINH_LOAISACH, XOA_LOAISACH } from "../const/index";
const loaisachReducer = (state = [], action) => {
  switch (action.type) {
    case THEM_LOAISACH:
      //code thêm loại sách vào store
      return state;
    case CHINH_LOAISACH:
      //code chỉnh 1 loại sách vào store
      return state;
    case XOA_LOAISACH:
      //code xóa 1 loại sách vào store
      return state;
    default:
      return state;
  }
};
export default loaisachReducer;
