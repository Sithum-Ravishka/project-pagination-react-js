import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import CreatorOrTag from './components/CreatorOrTag/CreatorOrTag';

const App = () => {

  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={ <Navigate to="/movies" />} />
          <Route path="/movies" exact element={<Home/>} />
          <Route path="/movies/search" exact element={<Home/>} />
          <Route path='/tags/:name' element={<CreatorOrTag/>} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;