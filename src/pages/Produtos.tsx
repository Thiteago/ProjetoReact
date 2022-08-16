import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import {Produto} from "../components/Produto/Produto";
import {Busca} from "../components/BarraDeBusca/BarraDeBusca";
import '../styles/produtos.scss';


export function Produtos(){
    return (
        <>
            <Header tamanho="pequeno"></Header>
            
            <section className="product-grid">
                <Busca></Busca>

                <div className="wrapper-produtos">
                    <aside className="container-filter">
                        <h1>Filtrar</h1>

                        <div className="wrapper-filter">
                            <div>
                                <input type="checkbox" /> <label>Alugados</label>
                            </div>
                            <div>
                                <input type="checkbox" /> <label>A Venda</label>
                            </div>
                        </div>
                    </aside>
                    <div className="container-produtos">
                        <Produto></Produto>
                        <Produto></Produto>
                    </div>
                </div>
                
            </section>



        <Footer></Footer>
        </>
    )
}