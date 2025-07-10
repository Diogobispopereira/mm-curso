import { Link } from "react-router"
import styled from "./curso.module.css"

export function Curso (){
    return(
        <article className={styled.curso}>
            <h2>Escolha abaixo seu curso e saiba mais: </h2>
            <nav>
                <Link to="/ingles">
                    <img src="./Curso/ingles.jpg" alt="quadro com nomes em inglês" />
                    <p>Inglês</p>
                </Link>
                  <Link to="/espanhol">
                    <img src="./Curso/espanhol.jpg" alt="quadro com nomes em espanhol"  />
                    </Link>
                
            </nav>
        </article>
    )
}