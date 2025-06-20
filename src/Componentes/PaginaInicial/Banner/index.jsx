import styled from "./banner.module.css"

export function Banner() {
    return (
        <article className={styled.banner}>
            < section className={styled.banner__container}>
            <img src="./Banner/m&m.png" alt="Imagem: De M&M para o mundo: seu inglês começa aqui. " />
            <div className={styled.banner__texto}>
                <p className={styled.quadro__amarelo}>Inglês e espanhol com aulas semanais ao vivo a partir de <strong>R$ 70,00</strong> mensais </p>
                <p className={styled.quadro__azul}>Cursos profissionalizantes digitais com nossos parceiros a partir de <strong>R$ 39,90</strong> (Curso completo) </p>
                <p className={styled.quadro__verde}>Estude online, do conforto da sua casa, com MATERIAL GRÁTIS!!!</p>
                <p className={styled.quadro__laranja}>Certificado ao concluir o curso</p>
            </div>
            </section>
             <section className={styled.banner__Descobrir}>
               {/* <img src="./Banner/livrosDescbrir.jpg" alt="livros aberto com lupas de aumento" /> */}
            <h2>Agora você pode realizar seus sonhos</h2>
               <div className={styled.texto__Descobrir}>
                  <ul>
                    <li>Viajar sem medo de se comunicar com nativos</li>
                    <li>Aprender ou aperfeiçoar suas habilidades profissionais  </li>
                  </ul>
                  <ul>
                    <li> Aumentar sua renda</li>
                    <li>Conseguir sua indepenência financeira</li>
                  </ul>
                </div> 
                <h3>*Tudo isso pagando pouco,com <strong>material grátis</strong> e com direito a <strong>certificado no final</strong>.</h3>
            </section>
        </article>
    )
}