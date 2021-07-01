import React from 'react';
import 'aos/dist/aos.css';
import {IoLogoInstagram} from 'react-icons/io'
import './Sobre.css'


function Sobre() {
    return (
        <>
        <div className="about-section">
        <div data-aos="fade-left" className="inner-container">
            <h1>Marcelo Sarri</h1>
            <p className="text1">
            Atirador, Instrutor de tiro e Apaixonado por armas de fogo. 
            </p>
            <p className="text" >          
            O gosto vem desde a infância, quando ainda moleque atirou com uma espingarda calibre 36GA.
            De lá pra cá, foram muitas as histórias com armas de fogo, hoje dedica parte do seu tempo para dar instrução de tiro e atuar como despachante bélico. <br /> <br />
            Entre em contato e agende um treino! <br /> 
            </p>
            <div className="skills">
                <a href="https://instagram.com/instrutor_sarri?utm_medium=copy_link" target="_blank" ><p className="text1"><IoLogoInstagram size={30} /> @ instrutor.sarri</p></a>
            </div>
        </div>
    </div>
    </>
    );
  }
  
  export default Sobre;