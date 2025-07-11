import styles from "./cursoEspanhol.module.css"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
export function CursoEspanhol() {
    return (
        <article className={styles.espanhol}>
            <section className={styles.espanholContainer}>
                <h2>Espanhol</h2>
                <div className={styles.secaoA}>
                    <img src="./CursoEspanhol/1-espanhol.jpg" alt="imagem com nomes em inglês" />
                    <ul>
                        <li>Aulas 1 por semana por meio do App gratuito GOOGLE MEET</li>
                        <li>(Assista uma aulas grátis )</li>
                        <li>Material grátis</li>
                        <li>Você pode estudar em grupos ou ter aulas particulares individuais</li>
                    </ul>
                </div>
                <div className={styles.secaoB}>
                    <img src="./CursoEspanhol/2-espanhol.jpg" alt="imagem com nomes em inglês" />
                    <ul>
                        <li>Aulas particulares que se adaptam a sua necessidade,ou seja, aprenda no seu ritmo. </li>
                        <li>Você também pode ter mais de uma aula por semana se desejar e ainda ganhar um desconto.</li>
                        <li>Pagamento por pix(Mensal).</li>
                    </ul>
                </div>

                <div className={styles.valoresEspanhol}>
                    <div className={styles.valoresContainer}>
                        <img src="./CursoEspanhol/3-espanhol.jpg" alt="nome: Muchas gracias" />
                        <h3>Receba um descontos maior para pagamentos semestral.</h3>
                        <h3>Conheça abaixo os valores para 1 ou 2 aulas semanais:</h3>
                    </div>
                    <div className={styles.valores}>
                        <div className={styles.textovalores}>
                            <div className={styles.Quadrotexto}> <h4> Tipo de Aula</h4></div>
                            <div className={styles.Quadrotexto}> <p className={styles.textoAzul}>grupo</p></div>
                            <div className={styles.Quadrotexto}> <p className={styles.textoVerde}>Particulares</p></div>
                        </div>
                        <div className={styles.textovalores}>
                            <div className={styles.Quadrotexto}><h4>1 vez por semana</h4></div>
                            <div className={styles.Quadrotexto}> <p className={styles.textoAzul}>70,00</p></div>
                            <div className={styles.Quadrotexto}>  <p className={styles.textoVerde}>120,00</p></div>
                        </div>
                        <div className={styles.textovalores}>
                            <div className={styles.Quadrotexto}> <h4>2 vez por semana</h4></div>
                            <div className={styles.Quadrotexto}> <p className={styles.textoAzul}>120,00 <br /><h5>(15% de desconto)</h5></p></div>
                            <div className={styles.Quadrotexto}><p className={styles.textoVerde}>200,00<br /><h5>(17% de desconto)</h5></p></div>
                        </div>
                        <div className={styles.textovalores}>
                            <div className={styles.Quadrotexto}><h4>Valor médio por aula</h4></div>
                            <div className={styles.Quadrotexto}><p className={styles.textoAzul}>15,00</p></div>
                            <div className={styles.Quadrotexto}><p className={styles.textoVerde}>27,00</p></div>
                        </div>
                </div>
                </div>
            <section className={styles.botao}>

                <h5>
                    Entre em contato agora, conlsulte dias e horários disponíveis e
                    faça seu orçamento clicando aqui ⬇️
                </h5>

                <a href="https://wa.me/75982627812?text=Quero%20saber%20mais%20sobre%20o%20curso%20o%20de%20o%20Espanhol"
                    className={styles.botaoWhatsapp}>WhatsApp</a>
            </section>
        </section>
        </article >
    )
}