import { Header } from "../components/Header";
import {Slide} from '../components/Slide';
import { MaisVendidos } from "../components/MaisVendidos";

export function Home(){
    return(
        <div>
            <Header></Header>
            <Slide></Slide>
            <MaisVendidos></MaisVendidos>
        </div>
        
    )
}