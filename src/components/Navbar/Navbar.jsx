import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "./Logo/LogoGardenia.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faLeaf,
  faSeedling,
  faWrench,
  faUser,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

import { auth } from "../../firebase"; // ajuste o caminho conforme sua estrutura
import { onAuthStateChanged } from "firebase/auth";

const Navbar = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const [usuarioLogado, setUsuarioLogado] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Verifica se o usuário está logado
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUsuarioLogado(user);
    });
    return () => unsubscribe(); // Limpa o listener
  }, []);

  const toggleMenu = () => setMenuAberto(!menuAberto);

  // 👉 Const que redireciona com base na autenticação
  const handlePerfilClick = () => {
    if (usuarioLogado) {
      navigate("/Perfil");
    } else {
      navigate("/Cadastro");
    }
  };

  return (
    <nav>
      <div className="conteudoNavbar">
        <div className="logoContainer">
          <img src={logo} alt="Logo Gardenia" className="logo" />
          <Link to="/" className="NomeLogo">Gardenia</Link>
        </div>

        <button className="menu-toggle" onClick={toggleMenu}>
          <FontAwesomeIcon icon={menuAberto ? faTimes : faBars} />
        </button>

        <ul className={`links ${menuAberto ? "ativo" : ""}`}>
          <li className="nav_item">
            <Link to="/Plantas" className="nav-link" onClick={toggleMenu}>
              <FontAwesomeIcon icon={faLeaf} className="nav-icon" /> Plantas
            </Link>
          </li>
          <li className="nav_item">
            <Link to="/Flores" className="nav-link" onClick={toggleMenu}>
              <FontAwesomeIcon icon={faSeedling} className="nav-icon" /> Flores
            </Link>
          </li>
          <li className="nav_item">
            <Link to="/Ferramentas" className="nav-link" onClick={toggleMenu}>
              <FontAwesomeIcon icon={faWrench} className="nav-icon" /> Ferramentas
            </Link>
          </li>
          <li className="nav_item mobile-only">
            <button className="nav-link" onClick={() => { toggleMenu(); handlePerfilClick(); }}>
              <FontAwesomeIcon icon={faUser} className="nav-icon" /> Perfil
            </button>
          </li>
        </ul>

        <div className="acoes desktop-only">
          <button className="NavbarButton" onClick={handlePerfilClick}>
            <FontAwesomeIcon icon={faUser} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
