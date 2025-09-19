import React from 'react'
import Nav from '../components/Nav'
import MainRoute from '../routes/MainRoute'
import Footer from '../components/Footer'

export default function Mainlayout() {
  return (
    <div>
        <Nav/>
        <MainRoute/>
        {/* <Footer/> */}
       
    </div>
  )
}
