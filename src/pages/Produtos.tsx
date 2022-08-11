import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import {Produto} from "../components/Produto";
import '../styles/produtos.scss';


export function Produtos(){
    return (
        <>
            <Header></Header>
            
            <section className="product-grid">

                <section className="main-busca">
                    <div className="wrapper-busca">
                        <input type="text" />
                        <button>Buscar</button>
                    </div>
                </section>

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