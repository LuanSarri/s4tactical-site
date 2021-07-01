import React from 'react';
import './CursosSeparados.css';
import curso3 from './curso3.jpeg';
import { Btn } from '../button/Btn';

function Curso1() {
    return (
        <>
            <h1 id="cursos">Discovery</h1>
            <img className="img-curso1" src={curso3} alt="Imagem do curso 1" />
            <h3>Curso Discovery</h3>
            <p className="text-esp">Curso destinado a quem quer vivenciar a experiência de atirar em um clube de tiro.</p>
            <h3>Parte teórica</h3>
            <p className="text-esp">Regras de segurança e funcionamento do armamento escolhido.</p>
            <h3>Parte prática</h3>
            <p className="text-esp">Disparos com as armas escolhidas em alvos de papel.</p>
            <h3>Incluso</h3>
            <p className="text-esp">
            •  Entrada no clube <br /><br />
            •  Armas <br /> <br />
            •  Munições <br /> <br />
            •  EPI <br /> <br />
            •  Alvos <br /> <br />
            •  Certificado <br /> <br />
            •  Brinde <br /> <br />
            </p>
            <h3>Pré-requisito</h3>
            <p className="text-esp">Ser maior de 18 anos e apresentar antecedentes criminais.</p>
            <h2 id="orç" >Faça um orçamento agora!</h2>
            <br />
            <Btn target="/contato" className='btns' buttonStyle="btn--cursos">
                CONTATO
            </Btn>
        </>
    );
  }
  
  export default Curso1;