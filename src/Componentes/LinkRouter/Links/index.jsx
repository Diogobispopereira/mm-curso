import { Link, Outlet } from "react-router";
import { Cabeicalho } from "../../PaginaInicial/Cabeicalho";
import styled from "./links.module.css"

export function Links (){
   return(
    <article className={styled.links}>
    <Cabeicalho/>
    <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/quemSomos">Quem Somos</Link></li>
          <li><Link to="/cursos">Cursos</Link></li>
          <li><Link to="/contato">Contato</Link></li>
        </ul>
        <Outlet/>
      </nav>
    </article>
   )
}