import { Header } from "../components/Header/Header";
import logoInstagram from "../assets/img/instagram-logo.png";
import logoFacebook from "../assets/img/facebook-logo.png";
import fotoClau from "../assets/img/foto-clau.png";
import '../styles/sobre.scss';

export function Sobre(){
    return(
        <>
        <Header tamanho="grande"></Header>
        <section className="main-sobre">
        <div className="wrapper-sobre">
            <h1>Sobre</h1>
            <p className="text">Meu nome é Claudia e eu sou a proprietária da marca ClauPrado, tendo o projeto sido criado a 10 anos, hoje vivo da profissão e entrego qualidade e muito carinho em todos os produtos e ideias que aqui recebo. <br></br>
                <br></br>
                Me localizo hoje na cidade de Campos do Jordão, preparando especialmente produtos pela região do Vale do Paraíba e futuramente até o Brasil.<br></br>
                <br></br>
                Sou formada em Artes Visuais pela UNIMES e já lecionei por alguns anos em escolas municipais de Campos do Jordão.<br></br>
                <br></br>
                Sou apaixonada pelo que faço , e espero que se encante o tanto quanto eu pelos meus projetos.</p>
            
            
            <img className="profile" src={fotoClau} alt="foto clau" />


        <div className="wrapper-social">
            <div className="social-media">
                <img src={logoInstagram} alt="logo instagram" />
                <p>@artes_que_encantam_byclauprado</p>
            </div>
            <div className="social-media">
                <img src={logoFacebook} alt="logo" />
                <p>/ClauPrado</p>
            </div>
        </div>
        </div>
    </section>
    </>
    )
}