import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
        <div className='bg-slate-900 fixed z-50 w-full' > 
          <Navbar/>
        </div>
        <div className='pt-20 pb-5'>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/cart" element={<Cart/>} />
          </Routes>
        </div>

    </div>

  );
}

export default App;
