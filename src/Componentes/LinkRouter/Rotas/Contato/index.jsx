import styles from "./contato.module.css"

export function Contato() {
    return (
        <article  className={styles.contato}>
            <section className={styles.contatoContainer}>
                <h2>Fale conosco e tire suas dúvidas</h2>
                <h3>Telefone: <strong>(79) 9 xxxx-xxxx</strong></h3>
                <p >Whatsapp</p>
                <button className={styles.botao}>
                    <h4>Clique Aqui</h4>
                </button>
                <h5>Email: mmcursos.....@gmail.com</h5>
            </section>
        </article>
    )
}