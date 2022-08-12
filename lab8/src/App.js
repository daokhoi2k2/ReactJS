import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Header from './common/Header';
import Bai1 from './components/bai1/Bai1';
import Bai2 from './components/bai2/Bai2';
import Bai3 from './components/bai3/Bai3';

function App() {
  return (
    <BrowserRouter>
      <div className="App container">
        <Header />
        <Routes>
          <Route path="bai1" element={<Bai1 />}></Route>
          <Route path="bai2" element={<Bai2 />}></Route>
          <Route path="bai3" element={<Bai3 />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
