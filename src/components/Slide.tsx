import '../styles/slide.scss'
import react, {useState} from 'react'
import nuvem from '../assets/img/nuvem-fundo.png'
import { SlideData } from './SlideData';


export function Slide(){
    
    return(
        <>
        <section className="main-slide">
            <div className="wrapper-slide">
                <div className="legenda">
                    <h1 id="titulo">Titulo</h1>
                    <p id="descricao">Texto</p>
                    <div className="clouds">
                        <img src={nuvem} alt="nuvem esquerda"/>
                        <img src={nuvem} alt="nuvem direita"/>
                    </div>
                </div>
                <img className="wrapper-slide -fundo" src={nuvem} alt=""/>
                {SlideData.map(({image}, index) => {
                    return(
                        <img className="wrapper-slide -mascara" id="img" src={image} alt="produto imagem"/>
                    )
                })}
            </div>

            <div className="nuvens">
                <div className="Cloud"></div>
            </div>
        </section>
        </>
    );
}