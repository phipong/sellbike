import React from 'react'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../page/Home'
import About from '../page/About'
import Service from '../page/Service'
import Blog from '../page/Blog'
import Shop from '../page/Shop'
import Faq from '../page/Faq'
import Contact from '../page/Contact'
import Detail from '../page/Detail'
export default function MainRoute() {
  return (
    <div>
           
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/service' element={<Service/>}/>
                <Route path='/blog' element={<Blog/>}/>
                <Route path='/shop' element={<Shop/>}/>
                <Route path='/faq' element={<Faq/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/detail' element={<Detail/>} />
            </Routes>
          
    </div>
  )
}
