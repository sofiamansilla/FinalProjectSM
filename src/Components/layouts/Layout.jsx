import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from './navbar'
import { Footer } from './footer'
import './layout.styles.css'

export const Layout = () => {
  return (
    <div className='layout'>
        
      <Navbar />
      <Outlet/>
      <Footer/>

    </div>
  )
}
