import { ContainerContent, MenuBar, ContentWrapper, Menu, Item, ProfileContainer, UserWrapper, ContainerImageProfile, ImageProfile, ContainerUltimoPedido, ContainerPedido, WrapperPedido, Info, Title, SectionTitle, DadosContainer, DadosWrapper, LegendaField, InputInfo, FieldSet } from "./styles"
import foto from '../../assets/img/foto-clau.png'
import { api } from '../../services/api';
import {useContext, useState} from 'react'
import {AuthContext} from '../../context/auth'

export function Perfil(){
    const [select, setSelect] = useState('Perfil')
    const {user} = useContext(AuthContext)

    const getUser = async () => {
        const response = await api.get(`/Usuarios/${user.id}/dados`)
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
                <FieldSet className="w-75 border p-2 d-flex flex-column">
                    <LegendaField className="w-auto">Nome Completo *</LegendaField>
                    <InputInfo type="text" placeholder="Fulano"/>
                </FieldSet>
                <FieldSet className="w-75 border p-2 d-flex flex-column">
                    <LegendaField>Email / Login *</LegendaField>
                    <InputInfo type="text" placeholder="fulano@gmail.com"/>
                </FieldSet>
                <FieldSet className="w-75 border p-2 d-flex flex-column">
                    <LegendaField>CPF *</LegendaField>
                    <InputInfo type="text" placeholder="655.989.211-12"/>
                </FieldSet>
                <FieldSet className="w-75 border p-2 d-flex flex-column">
                    <LegendaField>Data de Nascimento *</LegendaField>
                    <InputInfo type="text" placeholder="27/12/1998"/>
                </FieldSet>
                <FieldSet className="w-75 border p-2 d-flex flex-column">
                    <LegendaField>Telefone celular *</LegendaField>
                    <InputInfo type="text" placeholder="(12) 997431974"/>
                </FieldSet>
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