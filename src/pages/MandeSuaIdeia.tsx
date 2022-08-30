import {useRef, useEffect, useContext} from 'react';
import { Header } from "../components/Header/Header";
import "../styles/mandesuaideia.scss"
import background from "../assets/img/background.png"
import mande from "../assets/img/mande_sua_ideia.png";
import { IdeiaAnswers, IdeiaQuestion } from '../components/IdeiaQuestion/ideiaquestion';
import { AuthContext } from '../context/auth';
import styled from "styled-components"

const Aviso = styled.h1`
    font-size: 2em;
`

const ContainerAviso = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`

const ContainerContent = styled.section`
    background-image: url(${background});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
`


export function MandeSuaIdeia(){
    const teste = useRef<HTMLDivElement>(null);
    const ideiaReference = useRef<HTMLDivElement>(null);
    const {signed} = useContext(AuthContext)

    useEffect(() =>{
        setInterval(() =>{
            if(teste.current != null && ideiaReference.current != null){
                // teste.current.style.display = 'none';
                ideiaReference.current.style.display = 'flex';
            }
        }, 7000);
    }, [])

    if(signed){
        return(
            <>
                <Header tamanho='grande'></Header>
                <ContainerContent>
                    {/* <div ref={teste} className="container-logo">
                        <div className="wrapper-logo">
                            <img className="logo" src={mande} alt="" />
                        </div>
                    </div> */}

                    <IdeiaQuestion ideiaReference={ideiaReference}></IdeiaQuestion>
                    <IdeiaAnswers titulo='oi, deu certo' opcao1='Abacaxi ?' opcao2='Sereia' opcao3='' opcao4=''></IdeiaAnswers>
                </ContainerContent>
            </>
        );
    }else{
        return(
            <>
                <Header tamanho='grande'></Header>
                <ContainerAviso>
                    <Aviso>Por favor , faça login para mandar a sua ideia!</Aviso>
                </ContainerAviso>
            </>
        )
    }
}