import React from 'react';

class Book extends React.Component {
  constructor(props){  super(); }

  render(){
    const kq =
    <div className='Book col-md-4'>
        <h3>{this.props.book.tensach}</h3>     
        <img src={this.props.book.urlHinh} alt=''/>
        <p className="gia">{this.props.book.gia.toLocaleString('vi-VN')} VNĐ</p>
        <p className="button">          
          <button className='btn btn-success mx-1' type='button'>Xóa</button>
          <button className='btn btn-dark' type='button'>Chọn</button>
        </p>        
    </div>
    return (kq);
  }
}
export default Book;

