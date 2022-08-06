import { THEM_SACH, CHINH_SACH, XOA_SACH, DUA_SACH_VAO_STORE } from "../const/index";
const bookReducer = (state = [], action) => {
  switch (action.type) {
    case DUA_SACH_VAO_STORE:
      action.arrBook.forEach(s => {
        state = [...state,
        { id: s.id, tensach: s.tensach, gia: s.gia, urlHinh: s.urlHinh, idLoai: s.idLoai }
        ];
      });
      console.log("Đã đưa sách vào store:", state);
      return state;
    case THEM_SACH:
      const idBook = new Date().getTime();
      state = [...state, {
          id: idBook, tensach: action.tensach,
          gia: action.gia, urlHinh: ''
      }];
      console.log("Da them sach", state);
      return state;
    case CHINH_SACH:
      //code chỉnh sách
      return state;
    case XOA_SACH:
      
      return state;
    default:
      return state;
  }
};
export default bookReducer;
