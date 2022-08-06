import { DUA_SACH_VAO_STORE, THEM_SACH } from "../const/index";

export const actDuaSachVaoStore = (arrBook) => {
  return { type: DUA_SACH_VAO_STORE, arrBook,};
};

export const actThemSach = (tensach, gia) => {
    return { type: THEM_SACH, tensach, gia,};
  };
  
