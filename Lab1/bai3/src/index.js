import React from 'react';
// import ReactDOM from 'react-dom/client';
import ReactDOM from "react-dom"
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './Header';
import Footer from './Footer';
import MenuNgang from './MenuNgang';
import NoiDungChinh from './NoiDungChinh';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

console.log(ReactDOM)
ReactDOM.render(<Header />, document.querySelector("#header"));
ReactDOM.render(<Footer />, document.querySelector("#footer"));
ReactDOM.render(<MenuNgang />, document.querySelector("nav"));
ReactDOM.render(<NoiDungChinh />, document.querySelector("article"));

reportWebVitals();
