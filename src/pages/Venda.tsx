import {Header} from '../components/Header/Header'
import {Footer} from '../components/Footer/Footer'
import img from '../assets/img/cliente-av-fit.png'
import '../styles/Venda.scss'

export function Venda(){
    return(
        <div>
            <Header tamanho='pequeno'></Header>
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
                                <label>por dia</label>
                            </div>
                            <div className='wrapper-button'>
                                <button className='button'>Alugar</button>
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

                    <p className='container-descricao'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi architecto suscipit vel doloremque deserunt ut commodi reprehenderit quas nemo. Eaque nesciunt exercitationem, quisquam eum impedit ex maxime ipsum incidunt obcaecati? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis quasi vitae placeat sed facilis, odio dolor inventore laboriosam perspiciatis harum, atque voluptates itaque repellat quisquam nisi consequatur sunt voluptas id? Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem est aliquam, quas a qui amet quis adipisci nulla dolor doloremque, illum cumque sed error pariatur tenetur ipsam harum sint ad.</p>
                </div>


            </section>



            <Footer></Footer>
        </div>
    )
}