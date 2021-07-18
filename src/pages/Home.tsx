import { Header } from "../components/Header";
import {Slide} from '../components/Slide';
import { MaisVendidos } from "../components/MaisVendidos";
import { UltimosTrabalhos } from "../components/UltimosTrabalhos";
import { Testemunhos } from "../components/Testemunhos";

export function Home(){
    return(
        <div>
            <Header></Header>
            <Slide></Slide>
            <MaisVendidos></MaisVendidos>
            <UltimosTrabalhos></UltimosTrabalhos>
            <Testemunhos></Testemunhos>
        </div>
        
    )
}