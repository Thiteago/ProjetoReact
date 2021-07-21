import { Header } from "../components/Header";
import {Slide} from '../components/Slide';
import { Testemunhos } from "../components/Testemunhos";
import {Footer} from '../components/Footer'
import '../styles/home.scss'
import '../styles/maisvendidos.scss'
import '../styles/ultimostrabalhos.scss'


export function Home(){
    return(
        <div className="container-home">
            <Header></Header>
            <Slide></Slide>
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
            <div className="main-recentworks">
                <h1 className="main-title">Ultimos Trabalhos</h1>

                <div className="wrapper-products">
                    <div className="main-product"></div>

                    <div className="wrapper-secundary">
                        <div className="secundary-product"></div>
                        <div className="secundary-product"></div>
                        <div className="secundary-product"></div>
                        <div className="secundary-product"></div>
                    </div>
                </div>
            </div>
            <Testemunhos></Testemunhos>
            <section className="main-request">
                <h1>Faça seu pedido já!</h1>
                <button>Encomendar</button>
            </section>
            <Footer></Footer>
        </div>
        
    )
}