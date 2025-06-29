import styles from "./cursoIngles.module.css"
export function CursoIngles() {
    return (
        <article className={styles.ingles}>
            <section  className={styles.inglesContainer}>
                <h2>Inglês</h2>
                <div className={styles.secaoA}>
                    <img src="./CursoIngles/imagemIngles.jpg" alt="imagem com nomes em inglês" />
                    <ul>
                        <li>Aulas 1 por semana por meio do App gratuito GOOGLE MEET</li>
                        <li>(Assista uma aulas grátis )</li>
                        <li>Material grátis</li>
                        <li>Você pode estudar em grupos ou ter aulas particulares individuais</li>
                    </ul>
                </div>
                <div className={styles.secaoB}>
                    <img src="./CursoIngles/imagemLivro.jpg" alt="imagem com nomes em inglês" />
                    <ul>
                        <li>Aulas particulares que se adaptam a sua necessidade,ou seja, aprenda no seu ritmo </li>
                        <li>Você também pode ter mais de uma aula por semana se desejar e ainda ganhar um desconto</li>
                        <li>Pagamento por pix(Mensal)</li>
                    </ul>
                </div>
                <div className={styles.ingles.valoresIngles}>
                    <div valoresContainer>
                        <img src="" alt="" />
                    <h3>Receba descontos maiores para pagamentos semestral e anual.</h3>
                    <h3>Conheça abaixo os valores para 1 ou 2 aulas semanais:</h3>
                    </div>
                    <div className={styles.valores}>
                        <div  className={styles.textovalores}>
                            <h4> Tipo de Aula</h4>
                            <p className={styles.textoAzul}>grupo</p>
                            <p className={styles.textoVerde}>Particulares</p>
                        </div>
                        <div className={styles.textovalores}>
                             <h4>1 vez por semana</h4>
                              <p className={styles.textoAzul}>70,00</p>
                            <p className={styles.textoVerde}>120,00</p>
                        </div>
                        <div className={styles.textovalores}>
                            <h4>2 vez por semana</h4>
                             <p className={styles.textoAzul}>120,00 <br/><h5>(15% de desconto)</h5></p>
                            <p className={styles.textoVerde}>200,00<br/><h5>(17% de desconto)</h5></p>
                        </div>
                        <div className={styles.textovalores}>
                            <h4>Valor médio por aula</h4>
                            <p className={styles.textoAzul}>15,00</p>
                            <p className={styles.textoVerde}>27,00</p>
                        </div>

                    </div>
                </div>
            </section>
        </article>
    )
}