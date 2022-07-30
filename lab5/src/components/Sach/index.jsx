import React from 'react';
import "./Sach.css";

const Sach = (props) => {
    const { sach } = props;

    return (
        <div className='Sach' >
            <h3>{sach.tensach}</h3>
            <img src={sach.urlHinh} alt='' className="" />
            <p className="gia">{sach.gia.toLocaleString('vi-VN')} VNĐ</p>
            <p className="button">
                <button className='btn' type='button'>Xóa</button>
                <button className='btn' type='button'>Chọn</button>
            </p>
        </div>
    );
};

export default Sach;