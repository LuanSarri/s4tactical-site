import React from 'react';
import emailjs from 'emailjs-com';
import {IoLogoInstagram} from 'react-icons/io'

import './Contact.css';

export default function Contact() {


  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_sj2eyog', 'template_ypezqa6', e.target, 'user_0VHnZItl2OX7hInhZpRtn')
      .then((result) => {
          console.log(result.text);
          alert('Mensagem enviada com sucesso!');
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <>
    <div data-aos="fade-right" className="contact-section">
        <div data-aos="fade-right" className="contact-dentro">
          <form className="contact-form" onSubmit={sendEmail}>
              <div className="contact-div" >
                <h3 id="title-contact" >Fale conosco</h3>
                <label className="label-contact" >Nome Completo</label>
                <input className="input-contact" placeholder="Seu nome" type="text" name="user_name" required />
                <label className="label-contact" >Email</label>
                <input className="input-contact" placeholder="exemplo@email.com" type="email" name="user_email" required />
                <label  className="label-contact" >Telefone</label>
                <input className="input-contact" placeholder="(00) 00000-0000" name="user_number" required/>
                <label className="label-contact" >Assunto</label>
                <select className="select-contact" name="email_assunto" id="">
                  <option placeholder="Selecione" className="opt" value="Selecione" required></option>
                  <option className="opt" value="Orçamento">Orçamento</option>
                  <option className="opt" value="Dúvida">Dúvida</option>
                  <option className="opt" value="Outros">Outros</option>
                </select>
                <label className="label-contact" >Mensagem</label>
                <textarea className="textarea-contact" name="message" required />
                <button className="btn-contact"  type="submit" value="ENVIAR">ENVIAR</button>
                <a id="insta-contact" href="https://instagram.com/instrutor_sarri?utm_medium=copy_link" target="_blank" ><p className="text1"><IoLogoInstagram size={30} /> @ instrutor.sarri</p></a>
              </div>
              
          </form>
        </div>
      </div>
    </>
  );
}