import rodape from "./rodape.module.css"

export function Rodape() {
    return (
        <footer className={rodape.rodape}> 
           <section>
            <img src="./Cabeicalho/logo.jpg" alt="" />
            <div className={rodape.rodapeEndereco}>
                <span>Endereço: Rua xxxxxx xxxxx, xx Neópolis/Se</span>
                <span>CNPJ: 46.xxx.xxx/xxxx-xx</span>
                <span>telefone:(79)xxxxx-xxxx</span>
            </div>
           </section>
        </footer>
    )
}