import { ContainerContent, MenuBar, ContentWrapper, Menu, Item, ProfileContainer, UserWrapper, ContainerImageProfile, ImageProfile, ContainerUltimoPedido, ContainerPedido, WrapperPedido, Info, Title, SectionTitle, ReturnButton } from "./styles"
import foto from '../../assets/img/foto-clau.png'
import {useContext, useState} from 'react'
import {AuthContext} from '../../context/auth'
import { useNavigate } from "react-router";
import { DadosCad } from "../DadosCadastrais/DadosCad";
import { ProdutosAdmin } from "../ProdutosAdmin";




export function Perfil(){
    const [select, setSelect] = useState('Perfil')
    const history = useNavigate();
    const {user} = useContext(AuthContext)
    
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
    


    function changePage(){
        if(select == 'Perfil'){
            return(Perfil())
        }else if(select == 'Dados Cadastrais'){
            return(<DadosCad/>)
        }else if(select == 'Produtos'){
            return(<ProdutosAdmin/>)
        }
    }

    return (
        <>
        <ContainerContent>
            <MenuBar>
                <ReturnButton onClick={() => {history("/")}}>Voltar</ReturnButton>
                <Menu>
                    <Item onClick={() => {setSelect('Perfil')}}>Perfil</Item>
                    <Item onClick={() => {setSelect('Dados Cadastrais')}}>Dados Cadastrais</Item>
                    <Item onClick={() => {setSelect('Pagamento')}}>Formas de Pagamento</Item>
                    <Item onClick={() => {setSelect('Historico de Pedidos')}}>Historico de Pedidos</Item>
                    {user.cargo != 'Usuario' ? 
                    <>
                    <Item onClick={() => {setSelect('Promoções')}}>Promoções</Item>
                    <Item onClick={() => {setSelect('Produtos')}}>Produtos</Item>
                    <Item onClick={() => {setSelect('Relatórios')}}>Relatórios</Item>
                    <Item onClick={() => {setSelect('Estoque')}}>Estoque</Item>
                    <Item onClick={() => {setSelect('Permissoes')}}>Permissões</Item>
                    </> : <></>}
                </Menu>
            </MenuBar>
            <ContentWrapper>
                {changePage()}
            </ContentWrapper>
        </ContainerContent>
        </>
    )
}