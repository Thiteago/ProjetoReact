import '../styles/slide.scss'
import {useEffect, useState} from 'react'
import nuvem from '../assets/img/nuvem-fundo.png'
import { SlideData } from './SlideData';


const Slide = ({slides} : {slides : any}) => {

    var [current, setCurrent] = useState(0)
    const length = Object.keys(slides).length;


    const nextSlide = () =>{
        if(current == length - 1){
                setCurrent(0);
            }else if(current < length - 1){
                setCurrent(current + 1);
            }
    };

    const img = document.getElementById("teste")
    useEffect(() => {
        const interv = setInterval(nextSlide, 3000)
        return () => {
            clearInterval(interv);
        }
    }, [img])

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
                    {SlideData.map((slide, index) => {
                        return(
                            <div className={index === current ? 'slide active' : 'slide'} key={index}>
                                {index === current && (<img className="wrapper-slide -mascara" id="teste" src={slide.image} alt="produto imagem"/>)}
                            </div>
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

export default Slide;