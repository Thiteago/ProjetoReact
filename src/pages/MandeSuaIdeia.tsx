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
type Question ={
    question: string,
    answer: string
 }


export function MandeSuaIdeia(){
    const teste = useRef<HTMLDivElement>(null);
    const ideiaReference = useRef<HTMLDivElement>(null);
    const {signed} = useContext(AuthContext)
    const [pergunta, setPergunta] = useState({
        titulo: 'Vamos começar, voce está interessado em um produto ou em um Kit (Topo de bolo, painel decorativo , etc..)?',
        opcao1: 'Produto',
        opcao2: 'Kit',
        opcao3: '',
        opcao4: ''
    });
    
    const [answer, setAnswers] = useState<Question[]>([])

    const childToParent = (per, res) => {
        if(per.titulo == pergunta.titulo){
            if(res == 'A'){
                setAnswers(prevAnswers => [
                    ...prevAnswers,
                    {question: per, answer: res}
                ])
                
                setPergunta(prevPergunta => {
                    return {
                        ...prevPergunta, 
                        titulo : "Perfeito! Vamos criar um Produto incrível juntos! Agora me fala mais um pouco sobre o produto, é um topo de bolo , um arco de balão ? Pode me falar", 
                        opcao1 : "inputText",
                        opcao2 : ''
                    }
                })
            }else if(res == 'B'){
                setAnswers(prevAnswers => [
                    ...prevAnswers,
                    {question: per, answer: res}
                ])
        
                
            }else if(res != ''){
                if(Object.keys(res).length == 10){
                    console.log('entrou')
                    setAnswers(prevAnswers => [
                        ...prevAnswers,
                        {question: per, answer: res}
                    ])

                    setPergunta(prevPergunta => {
                        return {
                            ...prevPergunta,
                            titulo: "Excelente!! Acho que ja terminamos por aqui, clique em 'Finalizar' e entraremos em contato o quanto antes para acertar os detalhes.",
                            opcao1 : "Finalizar",
                        }
                    })
                }else{
                    setAnswers(prevAnswers => [
                        ...prevAnswers,
                        {question: per, answer: res}
                    ])
    
                    setPergunta(prevPergunta => {
                        return {
                            ...prevPergunta,
                            titulo: "Ótimo , agora que eu sei bastante sobre seu produto, me fala mais ou menos pra quando voce vai precisar?",
                            opcao1 : "input",
                        }
                    })
                }
            }
        }
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

                    <IdeiaQuestion ideiaReference={ideiaReference} titulo={pergunta.titulo} opcao1={pergunta.opcao1} opcao2={pergunta.opcao2} opcao3={pergunta.opcao3} opcao4={pergunta.opcao4} childToParent={childToParent}></IdeiaQuestion>                 

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