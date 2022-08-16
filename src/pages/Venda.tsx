import {Header} from '../components/Header/Header'
import {Footer} from '../components/Footer/Footer'
import img from '../assets/img/cliente-av-fit.png'
import '../styles/Venda.scss'

export function Venda(){
    return(
        <div>
            <Header></Header>
            <section className="container-produto">
                <div className="container-info">
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
                            <h1>Nome do Produto</h1>
                            <p>cod. 012345</p>
                        </div>
                        <div className='wrapper-buy'>
                            <div className='info-situation'>Disponivel apenas para Aluguel</div>
                            <div className='price-info'>
                                <h2>R$ 25</h2>
                                <label>por Dia</label>
                            </div>
                            <div className='wrapper-button'>
                                <button className='button'>Alugar</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='more-info'>
                        
                </div>


            </section>



            <Footer></Footer>
        </div>
    )
}