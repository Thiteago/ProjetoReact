import { Header } from "../components/Header/Header";
import Slide from '../components/Slide/Slide';
import { SlideData } from "../components/Slide/SlideData";
import { Testemunhos } from "../components/Testemunho/Testemunhos";
import {Footer} from '../components/Footer/Footer'
import '../styles/home.scss'
import {Promocoes} from '../components/Promocoes/Promocoes';
import { Category } from "../components/Categorias/Category";
import { Divider } from "../components/Divider/Divider";
import { BuyInfo } from "../components/BuyInformation/BuyInfo";


export function Home(){
    return(
        <div className="container-home">
            <Header tamanho="grande"></Header>
            <Slide slides={SlideData}></Slide>
           
            <div className="container-Content">
                
                <div className="main-topseller">
                    <Divider titulo="Clau Prado"></Divider>
                    <BuyInfo></BuyInfo>
                </div>

                <div className="main-recentworks">
                    <Divider titulo="Promocoes"></Divider>
                    <Promocoes></Promocoes>
                </div>

                <div className="category-container">
                    <Divider titulo="Para sua Festa"></Divider>
                    <Category></Category>

                </div>


                <Testemunhos></Testemunhos>
                <section className="main-request">
                    <h1>Faça seu pedido já!</h1>
                    <button>Encomendar</button>
                </section>
            </div>
            <Footer></Footer>
        </div>
        
    )
}