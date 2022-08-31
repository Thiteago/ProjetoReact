import { RefObject } from "react";
import gravatar from "../../assets/img/gravatar-sorrindo.png";
import { Answer, ContainerAnswers, ContainerContent, ContainerForm, GravatarImage, Question, Word, WrapperAnswer } from "./ideiaquestionStyle";

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
                    <WrapperAnswer>
                        <Word className='word'>A</Word>
                        <Answer onClick={() => childToParent({titulo},'A')} className='answer'>{opcao1}</Answer>
                    </WrapperAnswer>
                    
                    {opcao2 != undefined ?(
                        <WrapperAnswer>
                            <Word className='word'>B</Word>
                            <Answer onClick={() => childToParent({titulo},'B')} className='answer'>{opcao2}</Answer>
                        </WrapperAnswer>
                    ) : (
                        <></>
                    )}
                        
                    {opcao3 != undefined ? (
                        <WrapperAnswer>
                            <Word className='word'>C</Word>
                            <Answer onClick={() => childToParent({titulo},'C')} className='answer'>{opcao3}</Answer>
                        </WrapperAnswer>
                    ): (
                        <></>
                    )}

                    {opcao4 != undefined ? (
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