import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/image/Logo.png'

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img src={Logo} alt="Logo Roberflix" className="Logo" />
      </a>
      <p>
        Orgulhosamente criado por <a href="https://github.com/romaiajr" style={{ color: "var(--primary)", textDecoration: "none" }}><b>Roberto Maia</b></a> durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
