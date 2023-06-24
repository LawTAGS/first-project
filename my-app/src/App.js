import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar';
import Home from './components/home';
import Login from './components/login';
import Signup from './components/signup';
import './App.css';

function App() {
  return (
  <div>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
  </div>
  );
}

export default App;