import '../styles/maisvendidos.scss'

export function MaisVendidos(){
    return(
        <div className="main-topseller">
            <h1 className="main-title">Mais Pedidos</h1>

            <div className="wrapper-maisvendidos">
                <div className="produto">
                    <p>Produto1</p>
                </div>
                <div id="espaco" className="produto">
                    <p>Produto2</p>
                </div>
                <div className="produto">
                    <p>Produto3</p>
                </div>

            </div>
        </div>
    )
}