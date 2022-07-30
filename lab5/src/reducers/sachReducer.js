import { THEM_SACH, CHINH_SACH, XOA_SACH, DUA_SACH_VAO_STORE } from "../const/index";
const sachReducer = (state = [], action) => {
  switch (action.type) {
    case DUA_SACH_VAO_STORE:
      action.arrSach.forEach((s) => {
        state = [
          ...state,
          { id: s.id, tensach: s.tensach, gia: s.gia, urlHinh: s.urlHinh, idLoai: s.idLoai },
        ];
      });

      //code đưa sách vào store
      return state;
    case THEM_SACH:
      //code thêm sách
      return state;
    case CHINH_SACH:
      //code chỉnh sách
      return state;
    case XOA_SACH:
      //code xóa sách
      return state;
    default:
      return state;
  }
};
export default sachReducer;
