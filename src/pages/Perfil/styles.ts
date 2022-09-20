import styled from 'styled-components'

export const ContainerContent = styled.div`
    display: flex;
    width: 1920px;
    background-color: grey;
    height: 1080px;
    margin: 0 auto;
    justify-content: center;
`

export const MenuBar = styled.aside`
    width: 200px;
    background-color: #e8e8e8;

`

export const SectionTitle = styled.h3`
    font-size: 2rem
`

export const FieldSet = styled.fieldset`
    border: 1px solid grey;
    padding-left: 6px;
    display: flex;
    flex-direction: column;
    margin-top: 10px;

`

export const Title = styled.h4`
    font-size: 1rem;
` 

export const ContainerUltimoPedido = styled.div`
    width: 100%;
    height: 300px;
` 

export const DadosContainer = styled.div`
    padding-top: 20px;
    padding-left: 20px;
` 
export const LegendaField = styled.legend`
    float: none;
    font-size: 1.2rem;
` 

export const InputInfo = styled.input`
    width: 450px;
` 

export const DadosWrapper = styled.div`
`

export const ContainerPedido = styled.div`
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    text-align: center;

    & > a{
        font-weight: bold;
        cursor: pointer;
    }
` 

export const WrapperPedido = styled.div `
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    padding-bottom: 20px;
`

export const Info = styled.div`` 

export const ProfileContainer = styled.div`
    padding: 25px 30px;
`
export const UserWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

export const ContainerImageProfile = styled.div`
    width: 100px;
    height: 100px;
`

export const ImageProfile = styled.img`
    max-width: 100%;
`

export const ContentWrapper = styled.div`
    width: 760px;
    background-color: #ffffff;
`

export const Menu = styled.ul`
    padding-top: 50px;
    padding-bottom: 50px;
`

export const Item = styled.li`
    height: 50px;
    padding-left: 15px;
    cursor: pointer;

    &:hover{
        background-color: grey;
        color: white;
    }
`