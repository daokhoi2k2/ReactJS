import React, { useState } from 'react';
import MotSach from './Hien1Sach';

const ListSach = (props) => {

    const arrSach = [
        {
            id: 1,
            tensach: "Sống Chậm Đợi Nắng Lên",
            gia: 89000,
            urlHinh: "nghethuatsong/song-cham-doi-nang-len.png",
            mota: "",
        },
        {
            id: 2,
            tensach: "Sống Xanh Như Những Lá Trà",
            gia: 109000,
            urlHinh: "nghethuatsong/song-xanh-nhu-nhung-la-tra.png",
            mota: "",
        },
        {
            id: 3,
            tensach: "Sống Như Lần Đầu, Yêu Như Lần Cuối",
            gia: 99000,
            urlHinh: "nghethuatsong/song-nhu-lan-dau-yeu-nhu-lan-cuoi.jpg",
            mota: "",
        },
        {
            id: 4,
            tensach: "Những Ngày Đầy Nắng",
            gia: 129000,
            urlHinh: "nghethuatsong/nhung-ngay-day-nang.png",
            mota: "",
        },
        {
            id: 5,
            tensach: "Sức Mạnh Của Sự Tử Tế",
            gia: 68000,
            urlHinh: "nghethuatsong/suc-manh-cua-su-tu-te.png",
            mota: "",
        },
        {
            id: 6,
            tensach: "Để Có Một Tương Lai",
            gia: 155000,
            urlHinh: "nghethuatsong/de-co-mot-tuong-lai.png",
            mota: "",
        },
    ];


    return (
        <div className="listSach">
            <MotSach chonSach={props.chonSach}  sach={arrSach[0]} />
            <MotSach chonSach={props.chonSach} sach={arrSach[1]} />
            <MotSach chonSach={props.chonSach} sach={arrSach[2]} />
        </div>
    );
};

export default ListSach;