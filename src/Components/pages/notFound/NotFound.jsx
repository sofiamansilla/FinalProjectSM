import { ButtonReturnHome } from '../../common'
import './NotFound.styles.css'
import React from 'react'

export const NotFound = () => {
  return (
    <div  className='not-found'>
       <img 
        src="images/not-found.png" 
        alt="page not found" 
        />
        <ButtonReturnHome className='button--return-home'/>
    </div>
  )
}
