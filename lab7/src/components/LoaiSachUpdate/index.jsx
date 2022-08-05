import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getLoaiSach, updateLoaiSach } from '../../api/loaiSach';

const LoaiSachUpdate = () => {
    const { id } = useParams();
    const [tenLoai, setTenLoai] = useState("");
    const [thuTu, setThuTu] = useState("");
    const [anHien, setAnHien] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        getLoaiSach(id).then(res => res.json()).then((data) => {
            setTenLoai(data.tenloai);
            setThuTu(data.thutu);
            setAnHien(data.anhien);
        })
    }, [id])

    const handleUpdateLoaiSach = () => {
        updateLoaiSach(id, {
            tenloai: tenLoai,
            thutu: thuTu,
            anhien: anHien || "0",
        }).then(res => res.json()).then(data => {
            navigate("/loaiSach")
        }) 
    }
    return (
        <form style={{ padding: "0 20px" }}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                    Tên loại
                </label>
                <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setTenLoai(e.target.value)}
                    value={tenLoai}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                    Thứ tự
                </label>
                <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setThuTu(e.target.value)}
                    value={thuTu}
                />
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1" onChange={(e) => setAnHien(e.target.checked)} checked={anHien} >
                    Ẩn hiện
                </label>
            </div>
            <button type="button" className="btn btn-primary" onClick={handleUpdateLoaiSach}>
                Sửa
            </button>
        </form>

    );
};

export default LoaiSachUpdate;