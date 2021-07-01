import React from 'react';
import Navbar from '../navbar/Navbar';
import HeroSection from '../background/HeroSection';
import Sobre from '../sobre/Sobre';
import Despachante from '../despachante/Despachante';
import Cursos from '../cursos/Cursos';
import Footer from '../footer/Footer';


function Home () {
    return (
        <>
        <Navbar />
        <HeroSection />
        <Footer />
        </>
    )
}

export default Home;