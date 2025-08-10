import styled from "./cabeicalho.module.css"
export function Cabeicalho (){
    return(
        <article className={styled.cabeicalho}>
            <img src="./Cabeicalho/logo.jpg" alt="logo do Site" className={styled.logo}/>
        </article>
    )
}