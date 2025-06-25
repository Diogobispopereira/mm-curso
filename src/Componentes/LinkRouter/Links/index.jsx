import { Link, Outlet } from "react-router";
import { Cabeicalho } from "../../PaginaInicial/Cabeicalho";
import styled from "./links.module.css"
import { useState } from "react";

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export function Links() {
  const [menuCursosAberto, setMenuCursosAberto] = useState(false);
  const alternarMenuCursos = () => {
    setMenuCursosAberto(!menuCursosAberto);
  };

  return (
    <article className={styled.links}>
      <Cabeicalho />
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/quemSomos">Quem Somos</Link></li>
          <p onClick={alternarMenuCursos}><div className={styled.nome}>Cursos <ArrowDropDownIcon/> </div>{menuCursosAberto  && (
            <ul className={styled.linkcurso}>
              <li><Link to="/inglês">Inglês</Link></li>
              <li><Link to="/espanhol">Espanhol</Link></li>
            </ul>
          )}
          </p>
          <li><Link to="/contato">Contato</Link></li>
        </ul>
        <Outlet />
      </nav>
    </article>
  )
}