import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getLoaiSach } from '../../api/loaiSach';

const LoaiSachDetail = () => {
    const { id } = useParams();
    const [sach, setSach] = useState({});

    useEffect(() => {
        getLoaiSach(id).then(res => res.json()).then((data) => {
            setSach(data);
        })
    }, [id])

    return (
        <div>
            <div className="card" style={{ margin: "20px", padding: "10px" }}>
                <div className="card-body">
                    <h5 className="card-title">{sach.tenloai}</h5>
                    <p className="card-text">
                        Thứ tự: {sach.thutu}
                    </p>
                    <p className="card-text">
                        Thứ tự:         {
                            sach?.anhien == "1" && <button type="button" className="btn btn-primary" >Hiện</button>
                        }
                        {
                            sach?.anhien == "0" && <button type="button" className="btn btn-danger" >Ẩn</button>
                        }
                    </p>

                </div>
            </div>

        </div>
    );
};

export default LoaiSachDetail;