'use client'
import React from 'react';
import Navlink from '../Newsletter/Navlink/Navlink';
const Navbar = () => {
    return (
        <div className='fixed top-0 left-0 z-50 w-full'>
           {/* <!-- TOP INFO BAR --> */}
<div className="bg-green-700 text-white text-sm">
  <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-2">
    <p>Orders of $50 or more qualify for free shipping!</p>
    <div className="flex items-center gap-4">
      <span>📍 8502 Preston Rd. Inglewood, Maine 98380</span>
      {/* <span class="flex gap-3">
       <p>sawon</p>
       <p>sawon</p>
       <p>sawon</p>
       <p>sawon</p>
      </span> */}
    </div>
  </div>
</div>
 

{/* <!-- MAIN NAVBAR --> */}
<nav className="bg-white w-full flex  shadow-lg">
   {/* <!-- LOGO --> */}
    <div className="flex items-center brand-wrap  gap-2 h-full bg-green-700  w-xs">
      <span className="text-3xl font-bold text-gray-200">Frutin</span>
    </div>
  <div className="max-w-7xl mx-auto  py-4 flex items-center justify-between">

   

    {/* <!-- MENU --> */}
    <ul className="hidden md:flex items-center gap-8 font-medium">
      
          <Navlink to={'/'} name={'Home'} ></Navlink>
          <Navlink to={'/AllFruits'} name={'All Fruits'}></Navlink>
          <Navlink to={'/About'} name={'About Us'}></Navlink>
          <Navlink to={'/Contact'} name={'Contact'}></Navlink>
      <li className="hover:text-green-600 cursor-pointer">Service <span className="text-green-600">+</span></li>
      <li className="hover:text-green-600 cursor-pointer">Pages <span className="text-green-600">+</span></li>
      <li className="hover:text-green-600 cursor-pointer">Blog <span className="text-green-600">+</span></li>
    
    </ul>
    {/* <!-- RIGHT ACTIONS --> */}
    <div className="flex items-center gap-5">
      {/* <!-- Search --> */}
      <button className="text-xl">🔍</button>

      {/* <!-- Cart --> */}
      <div className="relative">
        🛒
        <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs px-1.5 rounded-full">
          0
        </span>
      </div>

      {/* <!-- Button --> */}
      <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-semibold">
        SHOP NOW →
      </button>
    </div>

  </div>
</nav>
 
        </div>
    );
};

export default Navbar;