import React from 'react';
import { connect } from 'react-redux'; 
import Book from './showBook';

const ListBook = (props) => {
  let listData=[];
  return (
    <div className="listBook row">
      {
        props.listBook.map( (s,index) =>(<Book book={s} key={index}/> )) 
      }
    </div>
  );
};

const mapState = (state) => {  
  return {  listBook: state.book, }; 
};
export default connect(mapState, null)(ListBook);
