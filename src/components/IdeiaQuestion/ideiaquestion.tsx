import { RefObject, useRef } from "react";
import gravatar from "../../assets/img/gravatar-sorrindo.png";
import {InputAnswer, WrapperInputAnswer ,Answer, ContainerAnswers, ContainerContent, ContainerForm, GravatarImage, Question, Word, WrapperAnswer, InputTextAnswer, ButtonSubmit, Alerta } from "./ideiaquestionStyle";

interface IdeiaQuestionProps{
    ideiaReference: RefObject<HTMLDivElement>;
    titulo: string;
    opcao1: string;
    opcao2?: string;
    opcao3?: string;
    opcao4?: string;
    childToParent: any;
}

export function IdeiaQuestion({ideiaReference, titulo,opcao1, opcao2,opcao3,opcao4, childToParent}: IdeiaQuestionProps){
    const texto = useRef<HTMLTextAreaElement>()
    const alerta = useRef<HTMLSpanElement>()
    let compOpcao1;

    if(texto.current != null){
        texto.current.value = '';
    }
    
    function verificarText(){
        if(texto.current?.value == undefined || texto.current?.value == ''){
            console.log('entrou aqui , textarea vazio')
            if(alerta.current != null){
                console.log('entrou aqui, alerta diferente de null e vai mudar o display')
                alerta.current.style.display = 'flex';
            }
        }else{
            if(alerta.current != null){
                alerta.current.style.display = 'none';
            }
        }
    }

    if(opcao1 == 'inputText'){
        compOpcao1 = <WrapperInputAnswer>
            <form>
                <Alerta ref={alerta}>Nao podemos avançar sem essa informação, por favor, insira alguns detalhes sobre o seu produto!</Alerta>
                <InputTextAnswer ref={texto}></InputTextAnswer>
                <ButtonSubmit onClick={function(event){verificarText(); childToParent({titulo}, texto.current?.value)}}>Enviar</ButtonSubmit>
            </form>
        </WrapperInputAnswer>
    }else if(opcao1 == 'input'){
        compOpcao1 = <WrapperInputAnswer>
            <form>
                <Alerta ref={alerta}>Nao podemos avançar sem essa informação, por favor, insira alguns detalhes sobre o seu produto!</Alerta>
                    <InputAnswer type="date" ref={texto}></InputAnswer>
                <ButtonSubmit onClick={function(event){verificarText(); childToParent({titulo}, texto.current?.value)}}>Enviar</ButtonSubmit>
            </form>
        </WrapperInputAnswer>
    }else{
        compOpcao1 = <WrapperAnswer>
            <Word className='word'>A</Word>
            <Answer onClick={() => childToParent({titulo},'A')} className='answer'>{opcao1}</Answer>
        </WrapperAnswer>
    }
    
    return(
            <ContainerContent ref={ideiaReference}>
                <ContainerForm>
                    <GravatarImage>
                        <img src={gravatar} alt="" />
                    </GravatarImage>
                    <div>
                    <Question>
                    <p>{titulo}</p>
                </Question>
                <ContainerAnswers>

                    {compOpcao1}

                    
                    {opcao2 != '' ?(
                        <WrapperAnswer>
                            <Word className='word'>B</Word>
                            <Answer onClick={() => childToParent({titulo},'B')} className='answer'>{opcao2}</Answer>
                        </WrapperAnswer>
                    ) : (
                        <></>
                    )}
                        
                    {opcao3 != '' ? (
                        <WrapperAnswer>
                            <Word className='word'>C</Word>
                            <Answer onClick={() => childToParent({titulo},'C')} className='answer'>{opcao3}</Answer>
                        </WrapperAnswer>
                    ): (
                        <></>
                    )}

                    {opcao4 != '' ? (
                        <WrapperAnswer>
                            <Word className='word'>D</Word>
                            <Answer onClick={() => childToParent({titulo},'D')} className='answer'>{opcao4}</Answer>
                        </WrapperAnswer>
                    ) : (
                        <></>
                    )}
                </ContainerAnswers>
                    </div>
                </ContainerForm>
            </ContainerContent>
    )
}