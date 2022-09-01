import { RefObject, useRef } from "react";
import gravatar from "../../assets/img/gravatar-sorrindo.png";
import {WrapperInputAnswer ,Answer, ContainerAnswers, ContainerContent, ContainerForm, GravatarImage, Question, Word, WrapperAnswer, InputAnswer, ButtonSubmit, Alerta } from "./ideiaquestionStyle";

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

    if(texto.current?.value == ''){
        if(alerta.current != null){
            alerta.current.style.display = 'flex';
        }
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

                    {opcao1 != 'input' ?(
                        <WrapperAnswer>
                            <Word className='word'>A</Word>
                            <Answer onClick={() => childToParent({titulo},'A')} className='answer'>{opcao1}</Answer>
                        </WrapperAnswer>
                    ): (
                        <WrapperInputAnswer>
                            <form>
                                <Alerta ref={alerta}>Nao podemos avançar sem essa informação, por favor, insira alguns detalhes sobre o seu produto!</Alerta>
                                <InputAnswer ref={texto}></InputAnswer>
                                <ButtonSubmit onClick={() => childToParent({titulo}, texto.current?.value)}>Enviar</ButtonSubmit>
                            </form>
                        </WrapperInputAnswer>
                    )}


                    
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