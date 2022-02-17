import React, {useState, useRef, useEffect} from 'react';
import './Header.css'
import Logo from "./Images/Logo.png";

function Header() {
  return (
    <div>
        <div className="nav-wrapper">  
                <a ><img src={Logo} alt="" width="50" className='logo2' />yntra</a>
                <span>MAN</span>
                <span>WOMAN</span>
                <span>KIDS</span>
                <span>HOME & LIVING</span>
                <span>BEAUTY</span>
                <input id="search" placeholder='Search' type="search" 
                className='search-bar '
                />
                  
                
            </div>

    </div>
  )
}

export default Header