import '../styles/header.scss'
import logo from '../assets/img/logomin.jpg'

export function Header(){
    return(
        <header className="main-header">
            <img src={logo} alt="logo clau min" className="logomin"/>
            <img src="../assets/img/logo-clau.png" alt="logo clau prado" height="244" width="230" className="logobig"/>
            <nav className="nav">
                <a className="main-action" href="#">Inicio</a>
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
                    <li><a href="#">Inicio</a></li>
                    <li><a href="produtos.html">Produtos</a></li>
                    <li><a href="mandesuaideia.html">Mande Sua Ideia</a></li>
                    <li><a href="sobre.html">Sobre</a></li>
                </ul>
            </nav>
            <div className="wrapper-login">
                <a className="main-action -second" href="login.html">Login</a>
                <a className="main-action -second" href="#">ou Cadastre-se</a>
                <img src="assets/img/avatar-login.png" alt="imagem para cadastro" height="105" className="img_avatar"/>
            </div>
        </header>
    );
}