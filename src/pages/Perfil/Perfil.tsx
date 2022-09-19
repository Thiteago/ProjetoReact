import { ContainerContent, MenuBar, ContentWrapper, Menu, Item, ProfileContainer, UserWrapper, ContainerImageProfile, ImageProfile, ContainerUltimoPedido, ContainerPedido, WrapperPedido, Info, Title, SectionTitle } from "./styles"
import foto from '../../assets/img/foto-clau.png'
import {useState} from 'react'

export function Perfil(){
    const [select, setSelect] = useState('Perfil')



    const Perfil = () => {
        return(
            <ProfileContainer>
                <UserWrapper>
                    <div>
                        <h2>Bem-vindo, Fulano!</h2>
                        <span>emailfulano@gmail.com</span>
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
        return(<div>dad</div>)
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