import styles from "./contato.module.css"

export function Contato() {
    return (
        <article className={styles.contato}>
            <section className={styles.contatoContainer}>
                <div  className={styles.contatoQuadro}>
                    <h2>Fale conosco e tire suas dúvidas sobre: Inglês</h2>
                    <h3>Telefone: <strong>(79) 9 xxxx-xxxx</strong></h3>
                    <p >Whatsapp</p>
                    <button className={styles.botao}>
                        <a href="https://wa.me/75982627812?text=Quero%20saber%20mais%20sobre%20o%20o%20curso%20o%20de%20o%20Inglês"> <h4>Clique Aqui   </h4></a>
                    </button>
                    <h5>Email: mmcursos.....@gmail.com</h5>
                </div>

                <div  className={styles.contatoQuadro}>
                    <h2>Fale conosco e tire suas dúvidas sobre: Espanhol</h2>
                    <h3>Telefone: <strong>(79) 9 xxxx-xxxx</strong></h3>
                    <p >Whatsapp</p>
                    <button className={styles.botao}>
                        <a href="https://wa.me/75982627812?text=Quero%20saber%20mais%20sobre%20o%20o%20curso%20o%20de%20o%20Espanhol"><h4>Clique Aqui</h4></a>
                    </button>
                    <h5>Email: mmcursos.....@gmail.com</h5>
                </div>
            </section>
        </article>
    )
}