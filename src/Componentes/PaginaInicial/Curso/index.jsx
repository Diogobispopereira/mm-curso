import styled from "./curso.module.css"

export function Curso (){
    return(
        <article className={styled.curso}>
            <h2>Escolha abaixo seu curso e saiba mais: </h2>
            <nav>
                <a href="">
                    <img src="./Curso/ingles.jpg" alt="quadro com nomes em inglês" />
                    <p>Inglês</p>
                </a>
                <a href="#">
                    <img src="./Curso/espanhol.jpg" alt="quadro com nomes em espanhol"  />
                    <p>Espanhol</p>
                </a>
            </nav>
        </article>
    )
}