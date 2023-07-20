import React, { useContext, useState } from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Detail from './components/Detail';
import Login from './components/Login';
import {auth,provider} from './Constant/FirebaseConfig';
import { AppContext } from './Services/ContextApi';

function App() {

  const {user} = useContext(AppContext)
  return (
    <div >
      
      
      
      
      <Routes>
      <Route path='/' element={user ? <Home/> : <Login/>}  />
      <Route path="/detail" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
