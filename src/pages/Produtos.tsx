import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import '../styles/produtos.scss';


export function Produtos(){
    return (
        <>
            <Header></Header>
            <section className="main-busca">
                <div className="wrapper-busca">
                    <input type="text" />
                    <button>Buscar</button>
                </div>
            </section>
            <section className="main-products">

            <div className="product-grid">
                
            </div>

        </section>

        <Footer></Footer>
        </>
    )
}