import { Header } from "../components/Header";
import {Slide} from '../components/Slide';
import { MaisVendidos } from "../components/MaisVendidos";
import { UltimosTrabalhos } from "../components/UltimosTrabalhos";
import { Testemunhos } from "../components/Testemunhos";
import '../styles/home.scss'
import {Footer} from '../components/Footer'

export function Home(){
    return(
        <div className="container-home">
            <Header></Header>
            <Slide></Slide>
            <MaisVendidos></MaisVendidos>
            <UltimosTrabalhos></UltimosTrabalhos>
            <Testemunhos></Testemunhos>
            <section className="main-request">
                <h1>Faça seu pedido já!</h1>
                <button>Encomendar</button>
            </section>
            <Footer></Footer>
        </div>
        
    )
}