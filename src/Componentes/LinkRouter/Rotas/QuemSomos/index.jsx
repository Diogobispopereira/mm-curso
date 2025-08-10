import style from "./quemSomos.module.css"

export function QuemSomos() {
    return (
        <article className={style.quemSomos}>
            <section>
                <div className={style.quemSomosContainer}>
                    <div className={style.texto}>
                        <img src="./QuemSomos/Mulher.jpg" alt="Mulher com os braços para cima " />
                        <div className={style.texto}>
                            <p className={style.textoVermelho}>Mas, de onde surgiu o MM Cursos? Quem são seus criadores?</p>
                            <p className={style.textoAzul}>O MM Cursos surgiu em meio a pandemia da Covid-19.
                                Para aperfeiçoarem seus conhecimentos e prática,
                                seus idealizadores viram a necessidade de contratar
                                aulas particulares com professores nativos e brasileiros,
                                porém os preços cobrados eram sempre altos. Sem ter outra
                                opção, eles contratavam esses professores. Mas, em suas
                                mentes, eles pensavam: "E quem não tem condições de pagar
                                R$ 200,00 ou mais para aprender um novo idioma? Essas pessoas
                                nunca aprenderão."<br />
                                Decididos a ajudá-las,criaram o <strong> MM Cursos.</strong> Eles perceberam que podiam sim
                                ser pagos pelo seu ensino e ainda assim oferecer aulas de qualidade
                                e descontraídas por um preço justo.
                            </p>
                        </div>
                    </div>

                    <article className={style.professores}>
                        <h2>Professores:</h2>
                        <div className={style.professoresContainer}>
                            <div className={style.professoresQuadro}>
                                <p>Professor de Matemática e Inglês</p>
                                <figure>
                                    <img src="./QuemSomos/Mulher.jpg" alt="imagem" />
                                    <figcaption>Michael</figcaption>
                                </figure>
                            </div>
                            <div className={style.professoresQuadro}>
                                <figure>
                                    <img src="./QuemSomos/Mulher.jpg" alt="imagem" />
                                    <figcaption>Mary</figcaption>
                                </figure>
                                <p>Professora de Espanhol para brasileiros
                                    e Português para falantes de Espanhol</p>
                            </div>
                        </div>
                    </article>
                </div>
            </section>
        </article>
    )
}