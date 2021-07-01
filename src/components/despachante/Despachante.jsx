import React from 'react';
import 'aos/dist/aos.css';
import './Despachante.css'
import { Btn } from '../button/Btn'

function Despachante() {
    return (
        <>
        <h1 id="despachante">Despachante</h1>
        <div className="sessao-despa">
        <div data-aos="fade-right" className="container-dentro">
            <h1>Evite dor de cabeça e perda de tempo, contrate nossos serviços!</h1>
            <p className="texto">Assessoria em todos os trâmites legais junto ao Exército e Polícia Federal</p>
            <p className="texto1">
                •  Aquisição <br /> <br />
                •  Apostilamento <br /> <br />
                •  Concessão de CR de Atirador, Caçador e Colecionador <br /> <br />
                •  Transferência <br /> <br /> 
                •  Guia de tráfego <br /> <br />

                Faça um orçamento!

            </p>
            <div className="btndespa"> 
            <Btn target="/contato" data-aos="fade-down" buttonStyle='btn--outline' buttonSize='btn--large'>
                CONTATO
            </Btn>
            </div>
        </div>
    </div>
        </>
    );
  }
  
  export default Despachante;