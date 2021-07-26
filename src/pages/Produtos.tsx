import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import '../styles/produtos.scss';


export function Produtos(){
    return (
        <>
            <Header></Header>
            <section className="main-busca">
            <h1 className="main-title">Produtos</h1>
                <div className="wrapper-busca">
                    <input type="text" />
                    <button>Buscar</button>
                </div>
            </section>
            <section className="main-products">

            <div className="product-grid">
                <figure className="product">
                    <figcaption>Titulo 1</figcaption>
                </figure>
                <figure className="product">
                    <figcaption>Titulo 2</figcaption>
                </figure>
                <figure className="product">
                    <figcaption>Titulo 3</figcaption>
                </figure>
                <figure className="product">
                    <figcaption>Titulo 4</figcaption>
                </figure>
                <figure className="product">
                    <figcaption>Titulo5</figcaption>
                </figure>
                <figure className="product">
                    <figcaption>Titulo 6</figcaption>
                </figure>
                <figure className="product">
                    <figcaption>Titulo</figcaption>
                </figure>
                <figure className="product">
                    <figcaption>Titulo</figcaption>
                </figure>
                <figure className="product">
                    <figcaption>Titulo</figcaption>
                </figure>
                <figure className="product">
                    <figcaption>Titulo</figcaption>
                </figure>
                <figure className="product">
                    <figcaption>Titulo</figcaption>
                </figure>
                <figure className="product">
                    <figcaption>Titulo</figcaption>
                </figure>
            </div>

        </section>

        <Footer></Footer>
        </>
    )
}