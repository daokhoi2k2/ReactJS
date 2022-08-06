import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers/indexReducer.js";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = createStore(reducers); 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>

);
reportWebVitals();
console.log("Xem store:", store.getState());
