import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import {Produto} from "../components/Produto/Produto";
import {Busca} from "../components/BarraDeBusca/BarraDeBusca";
import '../styles/produtos.scss';


export function Produtos(){
    return (
        <>
            <Header tamanho="grande"></Header>
            
            <section className="product-grid">
                <Busca></Busca>

                <aside className="container-filter">
                    <h1>Filtrar</h1>
                </aside>
                <div className="container-produtos">
                    <Produto></Produto>
                    <Produto></Produto>
                </div>
            </section>



        <Footer></Footer>
        </>
    )
}