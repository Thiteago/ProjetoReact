import '../Produto/produto.scss';
import avatar from '../../assets/img/cliente-av-fit.png'
import cifrao from '../../assets/icons/cifrao.svg'
import {Link} from 'react-router-dom';

interface ProdutoProps{
    title: string,
    description: string,
    type: string,
    buttonType: string,
    image: string
}


export function Produto(props: ProdutoProps){
    return(
    <div className='wrapper-produto'>
        <div className='icon-produto'>
            <img src={avatar} alt="" />
        </div>
        <div className='info-produto'>
            <div className='descricao-produto'>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </div>
            <div className="wrapper-additional-info">
                <div className='container-situation'>
                    <div className='icon-situation'>
                        <img src={cifrao} alt="#" />
                    </div>
                    <div className='situation'>
                        <p>{props.type}</p>
                    </div>
                </div>
                <div className='buy-button'>
                    <Link to={"/Venda"}><button className="botao">{props.buttonType}</button></Link>
                </div>
            </div>
        </div>
    </div>

)}