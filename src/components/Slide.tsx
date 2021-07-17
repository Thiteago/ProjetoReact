import '../styles/slide.scss'
import nuvem from '../assets/img/nuvem-fundo.png'
import produto from '../assets/img/produto-3.jpeg'
import videoBackground from '../assets/videos/playback.mp4'


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
                <img className="wrapper-slide -mascara" id="img" src={produto} alt=""/>
            </div>

        

            <video preload="auto" autoPlay={true} loop className="bg_video" muted>
                <source src={videoBackground} type="video/mp4"/>
            </video>
        </section>
        </>
    );
}