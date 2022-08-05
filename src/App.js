import React from 'react';
import { Routes , Route } from "react-router-dom";

import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Home from './components/Home';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
