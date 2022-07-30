import React, { useEffect, useState } from 'react';
import Sach from '../Sach';

const TrangChu = () => {
    const [listSach, ganlistSach] = useState([]);

    useEffect(() => {
        let url = "http://localhost:4000/sach";
        fetch(url).then(res => res.json()).then(data => {
            ganlistSach(data);
            console.log("Lấy sách từ server về xong", data);
        });
    }, []);

    return (
        <div>
            {
                listSach.map((sach) => <Sach sach={sach} />)
            }
        </div>
    );
};

export default TrangChu;