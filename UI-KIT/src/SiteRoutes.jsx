// eslint-disable-next-line no-unused-vars
import React from 'react'
import Favorites from './Pages/Favorites/Favorites'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import UserProfile from './Pages/UserProfile/UserProfile'
import Shop from './Pages/Shop/Shop'
import Blog from './Pages/Blog/Blog'
import About from './Pages/AboutUs/AboutUs'
import Contact from './Pages/Contact/Contact'
import {HOME, FAVORİTES,USERPROFİLE,CART, SHOP, BLOG, ABOUT, CONTACT} from './constants/path'

import { Routes, Route } from 'react-router-dom'

const SiteRoutes = () => {
  return (

    <Routes>
      <Route path={HOME} element={<Home/>}/>
      <Route path={FAVORİTES} element={<Favorites/>}/>
      <Route path={USERPROFİLE} element={<UserProfile/>}/>
      <Route path={CART} element={<Cart/>}/>
      <Route path={SHOP} element={<Shop/>}/>
      <Route path={BLOG} element={<Blog/>}/>
      <Route path={ABOUT} element={<About/>}/>
      <Route path={CONTACT} element={<Contact/>}/>
     </Routes>
  )
}

export default SiteRoutes
