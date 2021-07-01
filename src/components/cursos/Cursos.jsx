import React from 'react';
/* import 'bootstrap/dist/css/bootstrap.min.css'; */
import 'aos/dist/aos.css';
import './Cursos.css'
import { Card } from 'react-bootstrap';
import { Btn } from '../button/Btn'
import curso1 from './curso1.jpeg';
import curso2 from './curso2.jpeg';
import curso3 from './curso3.jpeg';
 
function Cursos() {
    return (
        <>
            <h1 id="cursos">Cursos</h1>
            <div data-aos="fade-down" className="curso-container">
                <Card className="card-solo"  style={{ width: '27rem' }}>
                    <Card.Img className="zoom" variant="top" src={curso1} />
                    <Card.Body>
                        <Card.Title className="title-solo" >Curso Básico</Card.Title>
                        <Card.Text className="texto-solo" >
                        Curso destinado para aqueles que estão iniciando no mundo das armas e buscam pelos primeiros aprendizados.
                        </Card.Text>
                        <div className="button-curso" >
                        <Btn target="/curso1" className="card-button" variant="primary">Ver mais</Btn>
                        </div>
                    </Card.Body>
                </Card>
                
                <Card className="card-solo" style={{ width: '27rem' }}>
                    <Card.Img className="zoom" variant="top" src={curso2} />
                    <Card.Body>
                        <Card.Title className="title-solo" >Curso Intermediário</Card.Title>
                        <Card.Text className="texto-solo">
                        Curso destinado para quem quer aprender novas técnicas de tiro, saque e combate para legitima defesa.
                        </Card.Text>
                        <div className="button-curso">
                        <Btn target="/curso2" className="card-button" variant="primary">Ver mais</Btn>
                        </div>
                    </Card.Body>
                </Card>
                
                <Card  style={{ width: '27rem' }}>
                    <Card.Img className="zoom" variant="top" src={curso3} />
                    <Card.Body>
                        <Card.Title className="title-solo" >Discovery</Card.Title>
                        <Card.Text className="texto-solo">
                        Curso destinado para quem quer vivenciar a experiência de atirar em um clube de tiro.
                        </Card.Text>
                        <div className="button-curso">
                        <Btn target="/curso3" className="card-button" variant="primary">Ver mais</Btn>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
  }
  
  export default Cursos;