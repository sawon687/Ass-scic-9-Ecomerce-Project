'use client'
import React from 'react';
import Navlink from '../Newsletter/Navlink/Navlink';
import Link from 'next/link';
import {  FaRegHeart, FaSearch } from 'react-icons/fa';
import { FiShoppingCart } from "react-icons/fi";
import SocialIcons from '../Sochialicon/SocialIcons';
const Navbar = () => {
    return (
      <div className='fixed top-0 left-0 z-50 w-full shadow-lg'>

{/* TOP INFO BAR */}
      <div className="bg-green-700  text-white text-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row  justify-between items-center px-6 py-2">
          <p>Orders of $50 or more qualify for free shipping!</p>
          <div className='flex items-center gap-4'>
            <h1>📍 8502 Preston Rd. Inglewood, Maine 98380</h1>
            <div className='flex items-center h-12 justify-center -mt-7 py-5'>
              <SocialIcons />
            </div>
          </div>
        </div>
      </div>
 

{/* <!-- MAIN NAVBAR --> */}
<nav className="bg-white w-full border-b-2 border-gray-300 h-full flex items-center shadow-lg">
   {/* <!-- LOGO --> */}
    <div className="flex items-center brand-wrap gap-2 h-full  bg-green-600  w-xs">
      <span className="text-3xl font-bold text-gray-200">Frutin</span>
    </div>
  <div className="max-w-7xl mx-auto py-5 flex items-center justify-between">

        {/* <!-- Search --> */}
   <div className='flex items-center gap-2 mr-3'>
    <input placeholder='Enter search Item' type="text" className='md:w-96 w-50 h-10 px-3 border-2 border-gray-300 focus:ring-2 focus:ring-green-500 outline-0  rounded-md placeholder:' />
  <button className="text-xl bg-green-500 h-10 px-7 rounded-md"><FaSearch className='text-white'></FaSearch></button>
   </div>


    {/* <!-- RIGHT ACTIONS --> */}
    <div className="flex items-center justify-between  md:visible gap-5">
 
     

      {/* <!-- Cart --> */}
      <div className="relative m">
       <FiShoppingCart size={25} />
        <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs px-1.5 rounded-full">
          0
        </span>
      </div>
      <div className="relative ">
       <FaRegHeart size={25} />
        <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs px-1.5 rounded-full">
          0
        </span>
      </div>
        <li className='list-none'><Link className='w-10 px-5 py-3 rounded-md border-2 border-green-500 hover:bg-green-600 hover:text-white cursor-pointer' href={'/Login'}>Login</Link></li>
        <li className='list-none'><Link className='w-10 px-5 py-3 rounded-md text-white bg-green-500 hover:bg-green-600 hover:text-white cursor-pointer' href={'/Register'}>Regester</Link></li>

      {/* <!-- Button --> */}
      <Link href={'/AllFruits'} className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-semibold">
        SHOP NOW →
      </Link>

    </div>

  </div>
</nav>
 
        

            {/* <!-- MENU --> */}
    <ul className=" bg-gray-100 md:px-50 px-10 shadow-lg border-b-2 border-gray-300 py-3 flex items-center gap-8 font-medium">
      
          <Navlink to={'/'} name={'Home'} ></Navlink>
          <Navlink to={'/AllFruits'} name={'All Fruits'}></Navlink>
          <Navlink to={'/About'} name={'About Us'}></Navlink>
          <Navlink to={'/Contact'} name={'Contact'}></Navlink>

      
    
    </ul>
    </div>
    );
};

export default Navbar;