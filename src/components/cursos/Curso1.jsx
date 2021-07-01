import React from 'react';
import './CursosSeparados.css';
import { Btn } from '../button/Btn';
import curso1 from './curso1.jpeg';

function Curso1() {
    return (
        <>
            <h1 id="cursos">Curso de Tiro Básico</h1>
            <img className="img-curso1" src={curso1} alt="Imagem do curso 1" />
            <h3>Curso iniciante</h3>
            <p className="text-esp" >Curso destinado para iniciantes, este é o primeiro passo para quem quer se tornar um CAC, (Caçador, Atirador e Colecionador), ter a posse de armas pelo SINARM, ou simplesmente conhecer um pouco mais sobre o assunto.</p>
            <h3>Parte teórica</h3>
            <p className="text-esp">Você aprenderá as regras de segurança, legislação, comportamento em estande de tiro, tipos de armas e munições, introdução à balística, fundamentos do tiro e solução de panes.</p>
            <h3>Parte prática</h3>
            <p className="text-esp">Você colocará em prática tudo que aprendeu, fará disparos em alvos de papel em distâncias de três a dez metros com diferentes armas, pistola, revolver e espingarda.</p>
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
            <br />
            <Btn target="/Contato" className='btns' buttonStyle="btn--cursos">
                CONTATO
            </Btn>
            <Btn target="/cursos" id='btns-voltar' buttonStyle="btn--cursos">
                VOLTAR AOS CURSOS
            </Btn>
        </>
    );
  }
  
  export default Curso1;