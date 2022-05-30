import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Components/Pages/Home';
import { Blog } from './Components/Pages/Blog';
import { Works } from './Components/Pages/Works';
import { Contact } from './Components/Pages/Contact';




function App() {
  return (   
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/works' element={<Works />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
  );
}

export default App;
