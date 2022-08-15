import {useRef, useEffect} from 'react';
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import "../styles/mandesuaideia.scss"
import mande from "../assets/img/mande_sua_ideia.png";



export function MandeSuaIdeia(){
    const teste = useRef<HTMLDivElement>(null);

    useEffect(() =>{
        setInterval(() =>{
            if(teste.current != null){
                teste.current.style.display = 'none';
            }
        }, 7000);
    }, [])

    
    return(
        <>
            <Header></Header>
            <div ref={teste} className="container-content">
                <div className="container-logo">
                    <img className="logo" src={mande} alt="" />
                </div>
            </div>

            <div className="container-form">
                
            </div>

            <Footer></Footer>
        </>
    )
}