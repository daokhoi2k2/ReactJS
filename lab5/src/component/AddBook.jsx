import React, { useState, useRef } from "react";
import { connect } from "react-redux";
import { actThemSach } from "../actions/actBook";
function ThemBook(props) {
  const [content, setContent] = useState(); 
  const refTenSach = useRef('');
  const refGia = useRef('');
  const hamThemSach = () => {
    props.ThemSach( refTenSach.current.value,  refGia.current.value); 
    refTenSach.current.value = ''; 
    refGia.current.value = '';  
  };
  return (
    <div className="col-md-12 p-1 mt-2">
      <h1 className="text-center text-white">ADD BOOK</h1>
       <div className="mb-3">
        <input className="form-control" placeholder="Tên sách" ref={refTenSach} />
       </div>
       <div className="mb-3">
        <input className="form-control" placeholder="Giá" ref={refGia}/>
       </div>
       <div className="mb-3">
          <button type="button" className="btn btn-primary" onClick={hamThemSach}>
            Thêm Sách
          </button>
        </div>
    </div>
  );
} 
const mapDispatch = (dispatch) => {
  return {
    ThemSach: (tensach, gia) => {
      dispatch(actThemSach(tensach, gia));
    },
  };
};
export default connect(null, mapDispatch)(ThemBook);
