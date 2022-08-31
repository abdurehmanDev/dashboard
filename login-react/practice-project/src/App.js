import React from 'react';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
//import Calender from './pages/Calender';
import Login from './components/Login';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
