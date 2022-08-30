import { RefObject } from "react";
import gravatar from "../../assets/img/gravatar-sorrindo.png";
import { Answer, ContainerAnswers, ContainerContent, ContainerForm, GravatarImage, Question, Word, WrapperAnswer } from "./ideiaquestionStyle";

interface IdeiaQuestionProps{
    ideiaReference: RefObject<HTMLDivElement>;
}

export function IdeiaQuestion({ideiaReference}: IdeiaQuestionProps){
    return(
            <ContainerContent ref={ideiaReference}>
                <ContainerForm>
                    <GravatarImage>
                        <img src={gravatar} alt="" />
                    </GravatarImage>
                    <div>
                        <Question>
                            <p>Ola! Eu sou a assistente virtual da Clau, e vou te ajudar a elaborar essa super ideia!</p>
                        </Question>
                        <ContainerAnswers>
                            <WrapperAnswer>
                                <Word className='word'>A</Word>
                                <Answer className='answer'>Vamos Começar!</Answer>
                            </WrapperAnswer>
                        </ContainerAnswers>
                    </div>
                </ContainerForm>
            </ContainerContent>
    )
}

interface IdeiaAnswersProps{
    titulo: string;
    opcao1: string;
    opcao2?: string;
    opcao3?: string;
    opcao4?: string;
}

export function IdeiaAnswers(props: IdeiaAnswersProps){
    return(
        <ContainerContent>
            <ContainerForm>
                <GravatarImage>
                    <img src={gravatar} alt="" />
                </GravatarImage>
            <div>
                <Question>
                    <p>{props.titulo}</p>
                </Question>
                <ContainerAnswers>
                    <WrapperAnswer>
                        <Word className='word'>A</Word>
                        <Answer className='answer'>{props.opcao1}</Answer>
                    </WrapperAnswer>

                    {props.opcao2 != '' ?(
                        <WrapperAnswer>
                            <Word className='word'>B</Word>
                            <Answer className='answer'>{props.opcao2}</Answer>
                        </WrapperAnswer>
                    ) : (
                        <></>
                    )}
                        
                    {props.opcao3 != '' ? (
                        <WrapperAnswer>
                            <Word className='word'>C</Word>
                            <Answer className='answer'>{props.opcao3}</Answer>
                        </WrapperAnswer>
                    ): (
                        <></>
                    )}

                    {props.opcao4 != '' ? (
                        <WrapperAnswer>
                            <Word className='word'>D</Word>
                            <Answer className='answer'>{props.opcao4}</Answer>
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