// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Navbar.css'
import { FaRegHeart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { BsCart3 } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='left'>
            <Link to="/">
             <h1>UI KIT Mobilya</h1>
            </Link>
        </div>
        <div className='center'>
          <ul>
            <li>
              <Link to="/">
              Home
              </Link>
            </li>
            <li>
              <Link to="/Shop">
              Shop
              </Link>
            </li>
            <li>
              <Link to="/Blog">
              Blog
              </Link>
            </li>
            <li>
              <Link to="/About">
              About Us
              </Link>
            </li>
            <li>
              <Link to="/Contact">
              Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className='right'>
            <ul>
            <li>
            <Link to="/Favorites">
              <FaRegHeart />
            </Link>
            </li>
            <li>
              <Link to="/UserProfile">
                <CgProfile />
              </Link>
            </li>
            <li>
              <Link to="/Cart">
                <BsCart3 />
              </Link>
            </li>
            </ul>
        </div>
      
    </nav>
  )
}

export default Navbar
