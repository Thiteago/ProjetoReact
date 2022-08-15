import {useRef, useEffect} from 'react';
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import "../styles/mandesuaideia.scss"
import mande from "../assets/img/mande_sua_ideia.png";
import gravatar from "../assets/img/gravatar-sorrindo.png";



export function MandeSuaIdeia(){
    const teste = useRef<HTMLDivElement>(null);
    const teste2 = useRef<HTMLDivElement>(null);

    useEffect(() =>{
        setInterval(() =>{
            if(teste.current != null && teste2.current != null){
                teste.current.style.display = 'none';
                teste2.current.style.display = 'flex';
            }
        }, 7000);
    }, [])

    
    return(
        <>
            <Header></Header>
            <div ref={teste} className="container-logo">
                <div className="wrapper-logo">
                    <img className="logo" src={mande} alt="" />
                </div>
            </div>

            <div ref={teste2} className="container-content">
                <div className='container-form'>
                    <div className="gravatar-image">
                        <img src={gravatar} alt="" />
                    </div>
                    <div className="wrapper-text">
                        <div className='question'>
                            <p>Ola! Eu sou a assistente virtual da Clau, e vou te ajudar a elaborar essa super ideia!</p>
                        </div>
                        <div className='container-answers'>
                            <div className='wrapper-answer'>
                                <div className='word'>A</div>
                                <div className='answer'>Oi linda</div>
                            </div>
                            <div className='wrapper-answer'>
                                <div className='word'>A</div>
                                <div className='answer'>Oi linda</div>
                            </div>
                            <div className='wrapper-answer'>
                                <div className='word'>A</div>
                                <div className='answer'>Oi linda</div>
                            </div>
                            <div className='wrapper-answer'>
                                <div className='word'>A</div>
                                <div className='answer'>Oi linda</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </>
    )
}