import React, {useState, useRef, useEffect} from 'react';
import './Header.css'
import Logo from "./Images/Logo.png";

function Header() {
  return (
    <div>
        <div className="nav-wrapper">  
                <a style={{color:'black', padding:'10px'}}><img src={Logo} alt="" width="40" className='logo2' />yntra</a>
                <span>MAN</span>
                <span>WOMAN</span>
                <span>KIDS</span>
                <span>HOME & LIVING</span>
                <span>BEAUTY</span>
                <input id="search" placeholder='Search' type="search" 
                className='search-bar #e3f2fd blue lighten-5 modal-trigger'
                />
                  
                
            </div>

    </div>
  )
}

export default Header