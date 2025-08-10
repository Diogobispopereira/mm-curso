
import { Link, Outlet } from "react-router";
import { Cabeicalho } from "../../PaginaInicial/Cabeicalho";
import styled from "./links.module.css";
import { useState } from "react";

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuIcon from '@mui/icons-material/Menu'; 
import CloseIcon from '@mui/icons-material/Close'; 

export function Links() {
  const [menuCursosAberto, setMenuCursosAberto] = useState(false);
  const [menuPrincipalAberto, setMenuPrincipalAberto] = useState(false); 

  const alternarMenuCursos = () => {
    setMenuCursosAberto(!menuCursosAberto);
  };

  const alternarMenuPrincipal = () => { 
    setMenuPrincipalAberto(!menuPrincipalAberto);
  };

  return (
    <header className={styled.links}>
      <section className={styled.linkCabeicalho}>
        <Cabeicalho />

        <button className={styled.menuHamburger} onClick={alternarMenuPrincipal}>
          {menuPrincipalAberto ? <CloseIcon /> : <MenuIcon />}
        </button>

        <nav className={`${styled.mainNav} ${menuPrincipalAberto ? styled.menuAberto : ''}`}>
          <ul>
            <li><Link to="/" onClick={() => setMenuPrincipalAberto(false)}>Home</Link></li>
            <li><Link to="/quemSomos" onClick={() => setMenuPrincipalAberto(false)}>Quem Somos</Link></li>
            <li onClick={alternarMenuCursos}>
              <p className={styled.nome}>Cursos <ArrowDropDownIcon/></p>
              {menuCursosAberto && (
                <ul className={styled.linkcurso}>
                  <li><Link to="/ingles" onClick={() => {setMenuPrincipalAberto(false); setMenuCursosAberto(false);}}>Inglês</Link></li>
                  <li><Link to="/espanhol" onClick={() => {setMenuPrincipalAberto(false); setMenuCursosAberto(false);}}>Espanhol</Link></li>
                </ul>
              )}
            </li>
            <li><Link to="/contato" onClick={() => setMenuPrincipalAberto(false)}>Contato</Link></li>
          </ul>
          <Outlet />
        </nav>
      </section>
    </header>
  );
}