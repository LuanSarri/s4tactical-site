import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import Cursos1 from '../cursos/Curso1';
import Cursos2 from '../cursos/Curso2';
import Cursos3 from '../cursos/Curso3';


function CursosPage () {
    return (
        <>
        <Navbar />
        <Cursos1 />
        <Cursos2 />
        <Cursos3 />
        <Footer />
        </>
    )
}

export default CursosPage;