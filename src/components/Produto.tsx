import '../styles/produtos.scss';
import avatar from '../assets/img/cliente-av-fit.png'
import cifrao from '../assets/icons/cifrao.svg'

export function Produto(){
    return(
    <div className='wrapper-produto'>
        <div className='icon-produto'>
            <img src={avatar} alt="" />
        </div>
        <div className='info-produto'>
            <div className='descricao-produto'>
                <h1>Nome produto</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quasi non labore repudiandae mollitia voluptates culpa ipsam natus quae tenetur excepturi repellat vel temporibus harum, tempora optio maxime eaque alias.</p>
            </div>
            <div className="wrapper-additional-info">
                <div className='container-situation'>
                    <div className='icon-situation'>
                        <img src={cifrao} alt="#" />
                    </div>
                    <div className='situation'>
                        <p>Aluguel</p>
                    </div>
                </div>
                <div className='buy-button'>
                    <button className="botao">Alugar</button>
                </div>
            </div>
        </div>
    </div>

)}