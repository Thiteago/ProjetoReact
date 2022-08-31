import {useRef, useEffect, useContext, useState} from 'react';
import { Header } from "../components/Header/Header";
import "../styles/mandesuaideia.scss"
import background from "../assets/img/background.png"
import mande from "../assets/img/mande_sua_ideia.png";
import { IdeiaQuestion } from '../components/IdeiaQuestion/ideiaquestion';
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
class Pergunta{
    titulo: string | undefined;
    opcao1: string | undefined;
    opcao2: string | undefined;
    opcao3: string | undefined;
    opcao4: string | undefined
    
    
}

export function MandeSuaIdeia(){
    const teste = useRef<HTMLDivElement>(null);
    const ideiaReference = useRef<HTMLDivElement>(null);
    const {signed} = useContext(AuthContext)
    const [pergunta, setPergunta] = useState('');

    const arrayRespostas: string[] = [];
    const pergunta1 = new Pergunta();
    pergunta1.titulo = 'Vamos começar, voce está interessado em um produto ou em um Kit (Topo de bolo, painel decorativo , etc..)?'
    pergunta1.opcao1 = 'Produto'
    pergunta1.opcao2 = 'Kit'

    const childToParent = (per, res) => {
        setPergunta(per)
        arrayRespostas.push(per, res)
    }



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


                    <IdeiaQuestion ideiaReference={ideiaReference} titulo={pergunta1.titulo} opcao1={pergunta1.opcao1} opcao2={pergunta1.opcao2} opcao3={pergunta1.opcao3} opcao4={pergunta1.opcao4} childToParent={childToParent}></IdeiaQuestion>                 

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