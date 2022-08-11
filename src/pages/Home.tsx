import { Header } from "../components/Header/Header";
import Slide from '../components/Slide';
import { SlideData } from "../components/SlideData";
import { Testemunhos } from "../components/Testemunhos";
import {Footer} from '../components/Footer/Footer'
import LocateIcon from '../assets/icons/location.svg';
import Card from '../assets/icons/card.svg';
import Locker from '../assets/icons/lock.svg';
import '../styles/home.scss'
import '../styles/maisvendidos.scss'
import {Promocoes} from '../components/Promocoes/Promocoes';
import { Category } from "../components/Categorias/Category";
import { Divider } from "../components/Divider/Divider";


export function Home(){
    return(
        <div className="container-home">
            <Header></Header>
            <Slide slides={SlideData}></Slide>
           
            <div className="container-Content">
                
                <div className="main-topseller">
                    <Divider titulo="Clau Prado"></Divider>
                    <div className="wrapper-maisvendidos">
                        <div>
                            <div className="locate-info">
                                <img src={LocateIcon} alt="" />
                                <div>Encomendas para Campos do Jordão e Região</div>
                            </div>
                        </div>
                        <div>
                            <div className="locate-info">
                                <img src={Card} alt="" />
                                <div>COMPRAS EM ATÉ 3x sem juros</div>
                            </div>
                        </div>
                        <div>
                            <div className="locate-info">
                                <img src={Locker} alt="" />
                                <div>SITE SEGURO compre tranquilo</div>    
                            </div>
                        </div>
                    </div>

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