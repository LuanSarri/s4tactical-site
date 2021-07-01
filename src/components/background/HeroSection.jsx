import React from 'react';
import './HeroSection.css';
import { Btn } from '../button/Btn'


function HeroSection() {
  return (
    <div className='hero-container'>
      <h1 data-aos="fade-down" >INSTRUTOR SARRI</h1>
      <p className="sobrep" data-aos="fade-down" >Dê o primeiro passo para adquirir sua arma! Cursos, documentação e muito mais!<br /> </p>
      <div className='hero-btns'>
      </div>
    </div>
  );
}

export default HeroSection;