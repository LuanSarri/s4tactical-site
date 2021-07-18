import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import {IoLogoInstagram} from 'react-icons/io'
import logo from './logo.png';

function unloadScrollBars() {
  document.documentElement.style.overflowx = 'hidden';
  document.body.scroll = "no"; 
}
unloadScrollBars();

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <=960){
            setButton(false);
        } else{
            setButton(true);
        }
    };

    useEffect(() => {
        showButton()
    },[]);

    window.addEventListener('resize', showButton);

    return (
       <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/Home" className="navbar-logo" onClick={closeMobileMenu} >         
                        <img className="logo" src={logo} alt='logo' />
                    </Link>
                    <div className="menu-icon" onClick={handleClick} >
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active': 'nav-menu'}>
                        <li className="nav-item">
                            <Link to="/home" className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link> 
                        </li>
                        <li className="nav-item">
                            <Link to="/sobre" className="nav-links" onClick={closeMobileMenu}>
                                Sobre
                            </Link> 
                        </li>
                        <li className="nav-item">
                            <Link to="/cursos" className="nav-links" onClick={closeMobileMenu}>
                                Cursos
                            </Link> 
                        </li>                        <li className="nav-item">
                            <Link to="/Despachante" className="nav-links" onClick={closeMobileMenu}>
                                Despachante
                            </Link> 
                        </li>                        <li className="nav-item">
                            <Link to="/contato" className="nav-links" onClick={closeMobileMenu}>
                                Contato
                            </Link> 
                        </li>
                    </ul>
                    {/*{button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}*/}
                </div>
            </nav>    
       </>
    )
}

export default Navbar
