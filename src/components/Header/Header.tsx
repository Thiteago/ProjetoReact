import '../Header/header.scss'
import { Link } from 'react-router-dom'
import logomin from '../../assets/img/logomin.jpg'
import logobig from '../../assets/img/logo-clau.png'
import avatar from '../../assets/img/avatar-login.png'
import { useRef, useEffect, useContext } from 'react'
import { AuthContext } from '../../context/auth'
import styled from 'styled-components'

interface HeaderProps{
    tamanho: string;
}

const ContainerOptionsProfile = styled.div`
    display: flex;
    gap: 10px;
    padding-bottom: 10px;
`

const SairBTN = styled(Link)`
    color: white;
    font-family: 'Viga';

    &:hover{
        color: black
    }
`

export function Header(props:HeaderProps){
    const logo = useRef<HTMLImageElement>(null);
    const {signed, user, logOut} = useContext(AuthContext)

    function handleClick(){
        logOut();
    }

    useEffect(() => {
        if(props.tamanho == "grande"){
            if(logo.current != null){
                logo.current.src= logobig;
                logo.current.classList.add("logobig")
            }
        }else if(props.tamanho == "pequeno"){
            if(logo.current != null){
                logo.current.src = logomin;
                logo.current.classList.add("logomin")
            }
        }
    }, [])

    if(!signed){
    return(
        <header className="main-header">
            <img ref={logo} src="" alt="logo clau prado"/>
            <nav className="nav">
                <Link className="main-action" to={"/#"}>Inicio</Link>
                <Link className="main-action" to={"/Produtos"}>Produtos</Link>
                <Link className="main-action" to={"/MandeSuaIdeia"}>Mande sua Ideia</Link>
                <Link className="main-action" to={"/Sobre"}>Sobre</Link>
            </nav>
            
            <div className="wrapper-login">
                <Link className="main-action -second" to={"/Login"}>Login</Link>
                <Link className="main-action -third" to={"/Login"}>ou Cadastre-se</Link>
                <img src={avatar} alt="imagem para cadastro" height="105" className="img_avatar"/>
            </div>
        </header>
    );}
    else{
        return(
            <>
            <header className="main-header">
            <img ref={logo} src="" alt="logo clau prado"/>
            <nav className="nav">
                <Link className="main-action" to={"/#"}>Inicio</Link>
                <Link className="main-action" to={"/Produtos"}>Produtos</Link>
                <Link className="main-action" to={"/MandeSuaIdeia"}>Mande sua Ideia</Link>
                <Link className="main-action" to={"/Sobre"}>Sobre</Link>
            </nav>
            
            <div className="wrapper-login -logado">
                <Link to={"/Login"} className="main-action -secondlogado">Ola! <br /> {user.nome}</Link>
                <ContainerOptionsProfile>
                    <SairBTN to={"/Perfil"}>Minha conta</SairBTN>
                    <SairBTN to={"/"} onClick={handleClick}>Sair</SairBTN>
                </ContainerOptionsProfile>
            </div>
        </header>
        </>
        )
    }
}