import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Book from './showBook';

const Home = () => {

    const [listBook, setListBook] = useState([]);

    useEffect(()=>{
        let url = "http://localhost:3500/book";

        fetch(url).then(res=> res.json())
        .then(data=>{
            setListBook(data);
            console.log("got book in database", data);
        })
    }, []);

    let listData=[];
    listBook.forEach(s=>{listData.push(<Book book={s} key={s.id}/>)});   
    return (<div className="listBook row">{listData}</div>);
  
}

export default Home;