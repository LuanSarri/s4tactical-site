import React from 'react';
import './CursosSeparados.css';
import curso2 from './curso2.jpeg';
import { Btn } from '../button/Btn';

function Curso1() {
    return (
        <>
            <h1 id="cursos">Curso de Tiro Intermediário</h1>
            <img className="img-curso1" src={curso2} alt="Imagem do curso 1" />
            <h3>Curso Intermediário</h3>
            <p className="text-esp">Curso destinado a quem quer aprender novas técnicas de tiro, saque e combate para legitima defesa.</p>
            <h3>Parte teórica</h3>
            <p className="text-esp">Regras de segurança, legislação, análise de ambientes, psicologia de combate, tipos de coldres.</p>
            <h3>Parte prática</h3>
            <p className="text-esp">Tiro em movimento, fatiamento, saque velado, alvos móveis, tiro abrigado, alvos múltiplos, tiro com empunhadura simples e como sanar panes.</p>
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
            <br />
            <h2 id="orç" >Faça um orçamento agora!</h2>
            <Btn target="/contato" className='btns' buttonStyle="btn--cursos">
                CONTATO
            </Btn>
            <Btn target="/cursos" id='btns-voltar' buttonStyle="btn--cursos">
                VOLTAR AOS CURSOS
            </Btn>
        </>
    );
  }
  
  export default Curso1;