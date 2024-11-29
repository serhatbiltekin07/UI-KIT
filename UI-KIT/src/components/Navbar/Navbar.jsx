// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Navbar.css'
import { FaRegHeart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { BsCart3 } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='left'>
            <h1>UI KIT Mobilya</h1>
        </div>
        <div className='center'>
                <h4>Home</h4>
                <h4>Shop</h4>
                <h4>Blog</h4>
                <h4>About Us</h4>
                <h4>Contact Us</h4>
        </div>
        <div className='right'>
            <ul>
            <li>
            <FaRegHeart />
            </li>
            <li>
            <CgProfile />
            </li>
            <li>
            <BsCart3 />
            </li>
            </ul>
        </div>
      
    </nav>
  )
}

export default Navbar
