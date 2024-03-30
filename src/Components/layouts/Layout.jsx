import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from './navbar'
import { Footer } from './footer'
import './layout.styles.css'

export const Layout = () => {
  return (
    <div className='layout'>
        
      <Navbar/>
        <div className="layout-body">
          <Outlet/>
        </div>
      <Footer/>

    </div>
  )
}
