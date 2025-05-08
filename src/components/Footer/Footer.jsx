import React from 'react';
import logo from '../Navbar/Logo/LogoGardenia.png'; // ajuste o caminho se necessário

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-conteudo">
        <img src={logo} alt="Logo Gardenia" className="footer-logo" />
        <div className="footer-textos">
          <h2 className="footer-nome">Gardenia</h2>
          <p className="footer-telefone">Telefone: (11) 91234-5678</p>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
