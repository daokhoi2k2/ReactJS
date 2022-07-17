import React from 'react';
import MotSach from './Hien1Sach';

const HienGioHang = (props) => {

    return (
        <div>
            <div className="sanpham">
                {
                    props.sach.map((sach, index) => {
                        return <MotSach removeSachDaChon={props.removeSachDaChon} sach={sach} />
                    })
                }
            </div>
        </div>
    );
};

export default HienGioHang;