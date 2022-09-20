import { ContainerContent, MenuBar, ContentWrapper, Menu, Item, ProfileContainer, UserWrapper, ContainerImageProfile, ImageProfile, ContainerUltimoPedido, ContainerPedido, WrapperPedido, Info, Title, SectionTitle, DadosContainer, DadosWrapper, LegendaField, InputInfo, FieldSet } from "./styles"
import foto from '../../assets/img/foto-clau.png'
import { api } from '../../services/api';
import {useContext, useEffect, useState} from 'react'
import {useForm} from 'react-hook-form'
import {AuthContext} from '../../context/auth'
import { ButtonSubmit } from "../../components/IdeiaQuestion/ideiaquestionStyle";
import { useNavigate } from "react-router";

interface User {
    id: number;
    nome: string;
    dataNascimento: string,
    email: string,
    cpf: string,
    rua: string,
    numeroRua: number,
    bairro: string,
    cidade: string,
    cep: string,
    numeroTel: string,
    numeroCel: string
}

export function Perfil(){
    const [select, setSelect] = useState('Perfil')
    const history = useNavigate();
    const {register, handleSubmit} = useForm();
    const [localUser , setLocaluser] = useState<User>({
        id: 1, nome: 'default', dataNascimento: '00-00-0000', email: 'default', cpf: 'default', rua: 'default', numeroRua: 1, bairro: 'default', cidade: 'default', cep: 'default', numeroCel: 'default', numeroTel: 'default' 
    })
    const {user, signed} = useContext(AuthContext)

    const number = Number(1)

    if(typeof(user.id) != typeof(number)){
        history("/Login")
    }

    useEffect(() => {
        api.get(`/Usuarios/${user.id}/dados`).then(response => {
            setLocaluser(response.data)
        })
    }, [])
    

    const dataNasc = new Date(localUser.dataNascimento)

    const handleUpdateUser = (e) =>{
        const data = e;
        console.log(data)
    }

    
    const Perfil = () => {
        return(
            <ProfileContainer>
                <UserWrapper>
                    <div>
                        <h2>Bem-vindo, {user.nome}!</h2>
                        <span>{user.email}</span>
                    </div>
                    <ContainerImageProfile>
                        <ImageProfile src={foto} alt="" />
                    </ContainerImageProfile>
                </UserWrapper>
                
                <ContainerUltimoPedido>
                    <SectionTitle>Ultimo Pedido</SectionTitle>
                    <ContainerPedido>
                        <WrapperPedido>
                            <Info>
                                <Title>NÚMERO DO PEDIDO</Title>
                                <span>#1</span>
                            </Info>
                            <Info>
                                <Title>STATUS</Title>
                                <span>Concluído</span>
                            </Info>
                            <Info>
                                <Title>DATA</Title>
                                <span>01/01/2022</span>
                            </Info>
                            <Info>
                                <Title>PAGAMENTO</Title>
                                <span>Cartão de crédito</span>
                            </Info>
                        </WrapperPedido>
                        <a>Histórico de Pedidos</a>
                    </ContainerPedido>
                    
                </ContainerUltimoPedido>

            </ProfileContainer>
        )
    }
    const DadosCad = () => {
        return(
        <DadosContainer>
            <h1>Seus Dados</h1>

            <DadosWrapper>
                <form onSubmit={handleSubmit(handleUpdateUser)} >
                    <FieldSet className="w-75 border p-2 d-flex flex-column">
                        <LegendaField className="w-auto" >Nome Completo *</LegendaField>
                        <InputInfo readOnly type="text" {...register("nome")} placeholder={localUser.nome}/>
                    </FieldSet>
                    <FieldSet className="w-75 border p-2 d-flex flex-column">
                        <LegendaField className="w-auto">Email / Login *</LegendaField>
                        <InputInfo type="text" {...register("email")} placeholder={localUser.email}/>
                    </FieldSet>
                    <FieldSet className="w-75 border p-2 d-flex flex-column">
                        <LegendaField className="w-auto" readOnly>CPF *</LegendaField>
                        <InputInfo type="text" {...register("cpf")} placeholder={localUser.cpf}/>
                    </FieldSet>
                    <FieldSet className="w-75 border p-2 d-flex flex-column">
                        <LegendaField className="w-auto" readOnly>Data de Nascimento *</LegendaField>
                        <InputInfo type="text" {...register("dataNascimento")} placeholder={dataNasc.toDateString()}/>
                    </FieldSet>
                    <FieldSet className="w-75 border p-2 d-flex flex-column">
                        <LegendaField className="w-auto">Telefone celular *</LegendaField>
                        <InputInfo type="text" {...register("numeroCel")} placeholder={localUser.numeroCel}/>
                    </FieldSet>
                    <ButtonSubmit type='submit'>Alterar</ButtonSubmit>
                </form>
            </DadosWrapper>
            
        </DadosContainer>
        )
    }

    const Pagamento = () => {
        return(<div>pag</div>)
    }

    function changePage(){
        if(select == 'Perfil'){
            return(Perfil())
        }else if(select == 'Dados Cadastrais'){
            return(DadosCad())
        }else if(select == 'Pagamento'){
            return(Pagamento())
        }
    }

    return (
        <>
        <ContainerContent>
            <MenuBar>
                <Menu>
                    <Item onClick={() => {setSelect('Perfil')}}>Perfil</Item>
                    <Item onClick={() => {setSelect('Dados Cadastrais')}}>Dados Cadastrais</Item>
                    <Item onClick={() => {setSelect('Pagamento')}}>Formas de Pagamento</Item>
                </Menu>
            </MenuBar>
            <ContentWrapper>
                {changePage()}
            </ContentWrapper>
        </ContainerContent>
        </>
    )
}