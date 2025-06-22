import { Banner } from "../../../PaginaInicial/Banner"
import { Curso } from "../../../PaginaInicial/Curso"
import { VideosDeAlunos } from "../../../PaginaInicial/VideoDeAluno"
import styled from "./home.module.css"

export function Home (){
    return(
        <main className={styled.home}>
          <div className={styled.home__container}>
            <Banner/>
            <Curso/>
            <VideosDeAlunos/>
          </div>
          
        </main>
       
    )
}