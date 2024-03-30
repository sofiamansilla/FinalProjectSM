import React from 'react';
import './Footer.styles.css'
import { useDentistStates } from '../../../Context/DentistContext';


/**
 * 
 * @return {React.Component} Componente de footer con link a redes sociales
 */
export const Footer = () => {

  const {state, dispatch} = useDentistStates()

  const darkModeClass = state.darkMode ? "layout-dark" : "layout";

  return (
    <footer className="footer">

        <img 
          className="icono-DH" 
          src="/images/DH.png" 
          alt="DH Logo" />
      
        <div 
          className="footer-social">

          <a 
            href="https://www.facebook.com/" 
            target="_blank" 
            rel="noopener noreferrer">
              <img 
                className="icono" 
                src="/images/ico-facebook.png" 
                alt='Ir a Facebook'
              />
          </a>
        
          <a 
            href="https://www.instagram.com/" 
            target="_blank" 
            rel="noopener noreferrer">
              <img 
                className="icono" 
                src="/images/ico-instagram.png" 
                alt='Ir a Instagram'
              />
          </a>
        
          <a 
            href="https://www.tiktok.com/" 
            target="_blank" 
            rel="noopener noreferrer">
              <img 
                className="icono" 
                src="/images/ico-tiktok.png" 
                alt='Ir a TikTok'
              />
          </a>
        
          <a 
            href="https://wa.me/" 
            target="_blank" 
            rel="noopener noreferrer">
              <img className="icono" 
              src="/images/ico-whatsapp.png" 
              alt='Ir a whatsapp'
              />
          </a>

        </div>
    </footer>
  );
};

