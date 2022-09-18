import { RefObject, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import gravatar from "../../assets/img/gravatar-sorrindo.png";
import { Item } from "../Item/Item";
import {InputAnswer, UnselectedItems, WrapperInputAnswer ,Answer, ContainerAnswers, ContainerContent, ContainerForm, GravatarImage, Question, Word, WrapperAnswer, InputTextAnswer, ButtonSubmit, Alerta, FormSubmit, WrapperAlternativeAnswer, AnswerTitle, SelectedItems } from "./ideiaquestionStyle";

interface IdeiaQuestionProps{
    ideiaReference: RefObject<HTMLDivElement>;
    titulo: string;
    opcao1?: string;
    opcao2?: string;
    tipo?: string;
    childToParent: any;
}

export function IdeiaQuestion({ideiaReference,tipo, titulo,opcao1, opcao2, childToParent}: IdeiaQuestionProps){
    const texto = useRef<HTMLTextAreaElement>()
    const data = useRef<HTMLInputElement>()
    const alerta = useRef<HTMLSpanElement>()
    const today = new Date().toLocaleDateString('en-ca')
    const [count, setCount] = useState(0)
    const [valid, setValid] = useState(false)
    const [value, setValue] = useState(today);
    const [items, setItems] = useState([
        {title: "Topo de bolo", id: 1, selected: false},
        {title: "Painel", id: 2, selected: false},
        {title: "Arco de Balao", id: 3, selected: false},
        {title: "Peteca", id: 4, selected: false}
    ])

    const navigate = useNavigate()
    let question;
    

    function redirecionar(){
        window.open('https://wa.me/5512997431974','_blank')
    }
        
    function verificarText(){
        if(texto.current?.value == undefined || texto.current?.value == '' || texto.current?.value.length == 10){
            if(alerta.current != null){
                alerta.current.style.display = 'flex';
            }
        }else{
            if(alerta.current != null){
                alerta.current.style.display = 'none';
            }
        }
    }

    const changeState = (id: number, state) => {
        items.map((item) => {
            if(item.id === id){
                setItems([...items, item.selected=state])
            }
        })

    }



    if(tipo == 'inputText'){
        question = <WrapperInputAnswer>
            <form>
                <Alerta ref={alerta}>Nao podemos avançar sem essa informação, por favor, insira alguns detalhes sobre o seu produto</Alerta>
                <InputTextAnswer onChange={e => setCount(e.target.value.length)} ref={texto}></InputTextAnswer>
                <p>{count}</p>
                {count <= 10 ? (
                    <p>Precisamos de mais informações, por favor, fale mais sobre o produto!</p>
                ) : (
                    <ButtonSubmit onClick={function(event){verificarText(); childToParent({titulo}, texto.current?.value, 'inputText')}}>Enviar</ButtonSubmit>
                )}
                
            </form>
        </WrapperInputAnswer>
    }else if(tipo == 'inputDate'){
        question = <WrapperInputAnswer>
            <FormSubmit>
                <InputAnswer
                 type="date" 
                 min={today} 
                 ref={data} 
                 value={value}
                 onChange={(e) => {
                    setValue(e.target.value)
                    if(e.target.value < today){
                        setValid(false)
                    }else{
                        setValid(true)
                    }
                 }
                } 
                 required></InputAnswer>
                {valid ? 
                <ButtonSubmit onClick={function(event){childToParent({titulo}, data.current?.value, 'prazo')}}>Enviar</ButtonSubmit> 
                :
                <span>A data informada deve ser posterior ao dia de hoje</span>
                }
            </FormSubmit>
        </WrapperInputAnswer>
    }else if(tipo == 'submit'){
        
        question = <ButtonSubmit onClick={function(event){
            alert('Ideia enviada com sucesso! Assim que possível iremos entrar em contato'), 
            navigate('/'), redirecionar()}}>Enviar</ButtonSubmit>
    
    }else if(tipo == 'alternativa'){
        question = 
        <WrapperAlternativeAnswer>
            <Answer>
                <Word>A</Word>
                <AnswerTitle onClick={() => childToParent({titulo},'A', 'alternativa')}>{opcao1}</AnswerTitle>
            </Answer>
            <Answer>
                <Word>B</Word>
                <AnswerTitle onClick={() => childToParent({titulo},'B', 'alternativa')}>{opcao2}</AnswerTitle>
            </Answer>
        </WrapperAlternativeAnswer>
    }else if(tipo == 'list'){
        question = 
        <WrapperAnswer>
            <UnselectedItems>
                {items.filter(item => item.selected === false).map((e) => {
                    return(<Item key={e.id} id={e.id} title={e.title} changeState={changeState}></Item>)
                })}
            </UnselectedItems>  
            <p>Selecionados:</p>
            <SelectedItems>
            {items.filter(item => item.selected === true).map((e) => {
                    return(<Item key={e.id} id={e.id} title={e.title} changeState={changeState}></Item>)
            })}
            </SelectedItems>
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

                            {question}
                    
                        </ContainerAnswers>
                    </div>
                </ContainerForm>
            </ContainerContent>
    )
}