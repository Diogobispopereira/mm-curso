// import { Link, Outlet } from "react-router";
// import { Cabeicalho } from "../../PaginaInicial/Cabeicalho";
// import styled from "./links.module.css"
// import { useState } from "react";

// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

// export function Links() {
//   const [menuCursosAberto, setMenuCursosAberto] = useState(false);
//   const alternarMenuCursos = () => {
//     setMenuCursosAberto(!menuCursosAberto);
//   };

//   return (
//     <header className={styled.links}>
//       <section className={styled.linkCabeicalho}>
//       <Cabeicalho />
//       <nav>
//         <ul>
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/quemSomos">Quem Somos</Link></li>
//           <li onClick={alternarMenuCursos}><p className={styled.nome}>Cursos <ArrowDropDownIcon/> </p>{menuCursosAberto  && (
//             <ul className={styled.linkcurso}>
//               <li><Link to="/ingles">Inglês</Link></li>
//               <li><Link to="/espanhol">Espanhol</Link></li>
//             </ul>
//           )}
//           </li>
//           <li><Link to="/contato">Contato</Link></li>
//         </ul>
//         <Outlet />
//       </nav>
//       </section>
//     </header>
//   )
// }


import { Link, Outlet } from "react-router"; // Use react-router-dom for Link and Outlet
import { Cabeicalho } from "../../PaginaInicial/Cabeicalho";
import styled from "./links.module.css";
import { useState } from "react";

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuIcon from '@mui/icons-material/Menu'; // Importe o ícone de menu
import CloseIcon from '@mui/icons-material/Close'; // Opcional: para o ícone de fechar

export function Links() {
  const [menuCursosAberto, setMenuCursosAberto] = useState(false);
  const [menuPrincipalAberto, setMenuPrincipalAberto] = useState(false); // Novo estado para o menu principal

  const alternarMenuCursos = () => {
    setMenuCursosAberto(!menuCursosAberto);
  };

  const alternarMenuPrincipal = () => { // Nova função para alternar o menu principal
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