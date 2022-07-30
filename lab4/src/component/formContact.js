import React from 'react';
export default class FormContact extends React.Component{
    constructor(){
        super();
        this.hoten = React.createRef();
        this.email = React.createRef();
        this.phong = React.createRef();
        this.noidung = React.createRef();
    }
    layDuLieu = (e) =>{
        console.log(this.hoten.current.value);
        console.log(this.email.current.value);
        e.preventDefault();
    }
    
    render(){
        const kq = 
        <form className='col-10 m-auto' onSubmit={this.layDuLieu}>
            <h1>LIÊN HỆ</h1>
            <div className='mb-3'>
                <label>Họ tên</label> <input id="name" className="form-control" ref={this.hoten} />
            </div>
            <div className='mb-3'>
            <label>Email</label> <input id="email" className="form-control" ref={this.email} />
            </div>
            <div className='mb-3'>
                <label>Phòng ban</label>
                <select id="phong" className="form-control">
                    <option value="0">Chọn phòng ban</option>
                    <option value="1">Phòng kỹ thuật</option>
                    <option value="2">Phòng kinh doanh</option>
                </select>
            </div>
            <div className='mb-3'>
                <label>Nội dung liên hệ</label> <textarea id="noidung" className="form-control" />
            </div>
            <div className='mb-3'><button type='submit' className='bg-light btn'>Gửi liên hệ</button></div>
        </form>
        return (kq);
    }
}