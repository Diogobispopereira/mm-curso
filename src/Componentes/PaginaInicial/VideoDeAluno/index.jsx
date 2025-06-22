import stylesVideos from "./videosDeAlunos.module.css"
export function VideosDeAlunos() {
    return (
        <article className={stylesVideos.videosAlunos}>
            <h2>Já ajudamos mais de xxx mil de pessoas a aprender inglês e espanhol!</h2>
            <p>Convidamos Você a ver como a MM CURSOS mudou a vida desses alunos</p>
            <h3>Sobre Inglês:</h3>
            <section>
                <div className={stylesVideos.AlunosFalando}>
                    <iframe src="https://www.youtube.com/embed/bSeZlT7Og8I?si=nqkkutBMPnwNXpCr"></iframe>
                    <div className={stylesVideos.videos}>
                        <h4>Carlo Henrique</h4>
                        <span>Depois de 7 meses de bastante preparo,eu conseguir a minha vaga de
                            trainee.
                            E a MM CURSO foi enssencial nesse processo</span>
                    </div>
                </div>
                <div className={stylesVideos.AlunosFalando}>
                    <iframe src="https://www.youtube.com/embed/bSeZlT7Og8I?si=nqkkutBMPnwNXpCr"></iframe>
                    <div className={stylesVideos.videos}>
                        <h4>Carlo Henrique</h4>
                        <span>Depois de 7 meses de bastante preparo,eu conseguir a minha vaga
                            de trainee. E a MM CURSO foi enssencial nesse processo</span>
                    </div>

                </div>
                <div className={stylesVideos.AlunosFalando}>
                    <iframe src="https://www.youtube.com/embed/bSeZlT7Og8I?si=nqkkutBMPnwNXpCr"></iframe>
                    <div className={stylesVideos.videos}>
                        <h4>Carlo Henrique</h4>
                        <span>Depois de 7 meses de bastante preparo,eu conseguir a minha
                            vaga de trainee. E a MM CURSO foi enssencial nesse processo</span>
                    </div>
                </div>
            </section>

            <h3>Sobre Espanhol:</h3>
            <section>
                <div className={stylesVideos.AlunosFalando}>
                    <iframe src="https://www.youtube.com/embed/bSeZlT7Og8I?si=nqkkutBMPnwNXpCr"></iframe>
                    <div className={stylesVideos.videos}>


                        <h4>Carlo Henrique</h4>
                        <span>Depois de 7 meses de bastante preparo,eu conseguir a minha vaga de
                            trainee.
                            E a MM CURSO foi enssencial nesse processo</span>
                    </div>
                </div>
                <div className={stylesVideos.AlunosFalando}>
                    <iframe src="https://www.youtube.com/embed/bSeZlT7Og8I?si=nqkkutBMPnwNXpCr"></iframe>


                    <h4>Carlo Henrique</h4>
                    <span>Depois de 7 meses de bastante preparo,eu conseguir a minha vaga
                        de trainee. E a MM CURSO foi enssencial nesse processo</span>
                    <div className={stylesVideos.videos}>
                    </div>

                </div>
                <div className={stylesVideos.AlunosFalando}>
                    <iframe src="https://www.youtube.com/embed/bSeZlT7Og8I?si=nqkkutBMPnwNXpCr"></iframe>


                    <h4>Carlo Henrique</h4>
                    <span>Depois de 7 meses de bastante preparo,eu conseguir a minha
                        vaga de trainee. E a MM CURSO foi enssencial nesse processo</span>
                </div>
                <div className={stylesVideos.videos}>
                </div>
            </section>
        </article>

    )
}