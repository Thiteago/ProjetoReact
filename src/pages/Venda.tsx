import {Header} from '../components/Header/Header'
import {Footer} from '../components/Footer/Footer'
import img from '../assets/img/cliente-av-fit.png'
import '../styles/Venda.scss'
import { useLocation } from 'react-router-dom'
import { api } from '../services/api'
import { useEffect, useState } from 'react'
import PreviousButton from '../components/PreviousButton/PreviousButton'


interface Produto{
    id: number,
	nome: string,
    descricao: string,
    dataCriacao: string,
    tipo: string,
    valor: number,
    altura: number,
    largura: number,
    comprimento: number,
    material: string,
    categoria: string,
    imagens: string[]
}


export function Venda(){
    const location = useLocation()
    const idLocation = location.state
    const [state, setState] = useState<Produto>()

    useEffect(() => {
        getInfo(Number(idLocation))
    }, [])

    const getInfo = (id: number) => {
        api.get(`/Produto/${id}`).then((response) => {
            setState({
                id: response.data.produtos[0].id,
                nome: response.data.produtos[0].nome,
                descricao: response.data.produtos[0].descricao,
                dataCriacao: response.data.produtos[0].dataCriacao,
                tipo: response.data.produtos[0].tipo,
                valor: response.data.produtos[0].valor,
                altura: response.data.produtos[0].altura,
                largura: response.data.produtos[0].largura,
                comprimento: response.data.produtos[0].comprimento,
                material: response.data.produtos[0].material,
                categoria: response.data.produtos[0].categoria,
                imagens: response.data.produtos[0].imagens
            })
        })
    }

    return(
        <div>
            <Header tamanho='pequeno'></Header>
            <section className="container-produto">
                <div className="container-info">
                    <PreviousButton endereco={'/Produtos'}></PreviousButton>
                    <div className='wrapper-info'>
                        <aside className='imagem-produto'>
                            <div className='imagem-principal'>
                                <img src={img} alt="" />
                            </div>
                            <div className='carrossel-imagem'>
                                <div className='img-small'><img src={img} alt="" /></div>
                                <div className='img-small'><img src={img} alt="" /></div>
                                <div className='img-small'><img src={img} alt="" /></div>
                                <div className='img-small'><img src={img} alt="" /></div>
                            </div>
                            
                        </aside>
                        <div className='info-produto'>
                            <div className="wrapper-title">
                                <h1>{state?.nome}</h1>
                                <p>cod. {state?.id}</p>
                            </div>
                            <div className='wrapper-buy'>
                                <div className='info-situation'>Disponivel apenas para {state?.tipo}</div>
                                <div className='price-info'>
                                    <h2>R$ {state?.valor}</h2>
                                    {state?.tipo == 'Aluguel' ? <label>por dia</label> : <></>}
                                    
                                </div>
                                <div className='wrapper-button'>
                                    <button className='button'>{state?.tipo == 'Aluguel' ? 'Alugar' : 'Comprar'}</button>
                                </div>
                            </div>
                        </div>
                    </div>    
                </div>
                <div className='more-info'>
                    <nav className="wrapper-menu">
                        <ul className='container-menu'>
                            <li className='ativo'>Descrição</li>
                            <li>Especificações Técnicas</li>
                            <li>Avaliações</li>
                        </ul>
                    </nav>

                    <p className='container-descricao'>{state?.descricao}</p>
                </div>


            </section>



            <Footer></Footer>
        </div>
    )
}