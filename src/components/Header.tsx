import '../styles/header.scss'
import { Link } from 'react-router-dom'
import logoMin from '../assets/img/logomin.jpg'
import logo from '../assets/img/logo-clau.png'
import avatar from '../assets/img/avatar-login.png'

export function Header(){

    return(
        <header className="main-header">
            <img src={logoMin} alt="logo clau min" className="logomin"/>
            <img src={logo} alt="logo clau prado" height="244" width="230" className="logobig"/>
            <nav className="nav">
                <Link to={"./#"}><a className="main-action">Inicio</a></Link>
                <Link to={"./Produtos"}><a className="main-action">Produtos</a></Link>
                <Link to={"./MandeSuaIdeia"}><a className="main-action">Mande sua Ideia</a></Link>
                <Link to={"./Sobre"}><a className="main-action" href="sobre.html">Sobre</a></Link>
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
                <Link to={"./Login"}><a className="main-action -second">Login</a></Link>
                <a className="main-action -third" href="www.google.com">ou Cadastre-se</a>
                <img src={avatar} alt="imagem para cadastro" height="105" className="img_avatar"/>
            </div>
        </header>
    );
}