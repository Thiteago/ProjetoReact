import '../styles/slide.scss'
import {useEffect, useState} from 'react'
import nuvem from '../assets/img/nuvem-fundo.png'
import { SlideData } from './SlideData';


const Slide = ({slides} : {slides : any}) => {
const [current, setCurrent] = useState(0)
const length = slides.lenght;


const nextSlide = () =>{
    setCurrent(current === length - 1 ? 0 : current + 1);
    if(current === length){
        setCurrent(0);
    }
};

useEffect(() => {
    const interv = setInterval(nextSlide, 3000)
    return () => {
        clearInterval(interv);
    }
})

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
                            {index === current && (<img className="wrapper-slide -mascara" id="img" src={slide.image} alt="produto imagem"/>)}
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