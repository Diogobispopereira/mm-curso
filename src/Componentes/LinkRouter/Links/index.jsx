import { Link, Outlet } from "react-router";
import { Cabeicalho } from "../../PaginaInicial/Cabeicalho";
import styled from "./links.module.css"
import { useState } from "react";

export function Links() {
  const [menu, setMenu] = useState(false);
  const colocarMouse = () => {
    setMenu(true);
  };
  const tirarMouse = () => {
    setMenu(false);
  }
  return (
    <article className={styled.links}>
      <Cabeicalho />
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/quemSomos">Quem Somos</Link></li>
          <li
           onMouseEnter={colocarMouse}
           onMouseLeave={tirarMouse}
          >Cursos x{menu && (
            <ul className={styled.linkcurso}>
              <li><Link to="/inglês">Inglês</Link></li>
              <li><Link to="/espanhol">Espanhol</Link></li>
            </ul>
          )}
          </li>
          <li><Link to="/contato">Contato</Link></li>
        </ul>
        <Outlet />
      </nav>
    </article>
  )
}