import { Header } from "../components/Header";
import Slide from '../components/Slide';
import { SlideData } from "../components/SlideData";
import { Testemunhos } from "../components/Testemunhos";
import {Footer} from '../components/Footer'
import LocateIcon from '../assets/icons/location.svg';
import Card from '../assets/icons/card.svg';
import Locker from '../assets/icons/lock.svg';
import '../styles/home.scss'
import '../styles/maisvendidos.scss'
import '../styles/ultimostrabalhos.scss'
import {Promocoes} from '../components/Promocoes';


export function Home(){
    return(
        <div className="container-home">
            <Header></Header>
            <Slide slides={SlideData}></Slide>
           
            <div className="container-Content">
                
                <div className="main-topseller">
                    <h1 className="main-title">
                        <span className="divider"></span>
                            <p>Clau Prado</p>
                        <span className="divider"></span>
                    </h1>
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
                    <h1 className="main-title">
                        <span className="divider"></span>
                            <p>Promoções</p>
                        <span className="divider"></span>    
                    </h1>
                    <Promocoes></Promocoes>
                </div>
            <Testemunhos></Testemunhos>
            <section className="main-request">
                <h1>Faça seu pedido já!</h1>
                <button>Encomendar</button>
            </section>
            <Footer></Footer>
            </div>

        </div>
        
    )
}