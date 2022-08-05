import React, { useEffect, useState } from 'react';
import { deleteLoaiSach, getAllLoaiSach } from '../../api/loaiSach';
import { Link } from "react-router-dom";

const LoaiSach = () => {
    const [loaiSachs, setLoaiSachs] = useState([]);

    useEffect(() => {
        getAllLoaiSach().then((res) => res.json()).then(data => { setLoaiSachs(data) })
    }, []);

    const handleDeleteLoaiSach = (id) => {
        deleteLoaiSach(id).then((res) => res.json()).then(data => {
            setLoaiSachs(loaiSachs.filter(item => item.id !== id))
        })
    }

    return (
        <div>
            <Link to="add" type="button" className="btn btn-success" style={{ display: "block", margin: "10px 10px 10px auto" }}>Thêm loại sách</Link>
            <table className="table table-bordered border-primary">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Tên loại</th>
                        <th scope="col">Thứ tự</th>
                        <th scope="col">Ẩn hiện</th>
                        <th scope="col">Xóa/Sửa</th>
                    </tr>
                </thead>
                <tbody>
                    {loaiSachs?.map((item) => <tr>
                        <th key={item.id} scope="row">{item?.id}</th>
                        <td>{item?.tenloai}</td>
                        <td>{item?.thutu}</td>
                        <td>
                            {
                                item?.anhien == "1" && <button type="button" className="btn btn-primary" >Hiện</button>
                            }
                            {
                                item?.anhien == "0" && <button type="button" className="btn btn-danger" >Ẩn</button>
                            }
                        </td>
                        <td>
                            <button type="button" className="btn btn-danger" onClick={() => handleDeleteLoaiSach(item?.id)}>Xóa</button>
                            <Link to={`/loaiSach/update/${item.id}`} className="btn btn-primary" style={{ marginLeft: "10px" }}>Sửa</Link>
                            <Link to={`/loaiSach/${item.id}`} style={{ marginLeft: "10px" }} type="button" className="btn btn-info">Chi tiết</Link>
                        </td>
                    </tr>)}

                </tbody>
            </table>
        </div>
    );
};

export default LoaiSach;