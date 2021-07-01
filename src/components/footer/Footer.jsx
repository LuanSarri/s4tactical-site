import React from 'react';
import {SiWhatsapp} from 'react-icons/si'
import './Footer.css'


function Footer() {
    return (
        <>
            <div className="footer-main" >
                <br />
                <p id="fale"> Instrutor Marcelo Sarri - <SiWhatsapp size={17} /> (19) 99731-6521</p>
                <p className="footer-text" >© S4 Tactical - All Rights Reserved - Site desenvolvido por Luan Sarri</p> 
            </div>
        </>
    );
  }
  
  export default Footer;

  