import '../styles/header.scss'
import logoMin from '../assets/img/logomin.jpg'
import logo from '../assets/img/logo-clau.png'
import avatar from '../assets/img/avatar-login.png'

export function Header(){

    return(
        <header className="main-header">
            <img src={logoMin} alt="logo clau min" className="logomin"/>
            <img src={logo} alt="logo clau prado" height="244" width="230" className="logobig"/>
            <nav className="nav">
                <a className="main-action" href="www.google.com">Inicio</a>
                <a className="main-action" href="produtos.html">Produtos</a>
                <a className="main-action" href="mandesuaideia.html">Mande sua Ideia</a>
                <a className="main-action" href="sobre.html">Sobre</a>
            </nav>
            <div className="menu-trigger" id="menu-trigger">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <nav className="menu-hidde" id="menu-hidde">
                <ul>
                    <li><a href="www.google.com">Inicio</a></li>
                    <li><a href="produtos.html">Produtos</a></li>
                    <li><a href="mandesuaideia.html">Mande Sua Ideia</a></li>
                    <li><a href="sobre.html">Sobre</a></li>
                </ul>
            </nav>
            <div className="wrapper-login">
                <a className="main-action -second" href="login.html">Login</a>
                <a className="main-action -third" href="www.google.com">ou Cadastre-se</a>
                <img src={avatar} alt="imagem para cadastro" height="105" className="img_avatar"/>
            </div>
        </header>
    );
}