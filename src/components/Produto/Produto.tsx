import '../Produto/produto.scss';
import avatar from '../../assets/img/cliente-av-fit.png'
import cifrao from '../../assets/icons/cifrao.svg'
import {Link} from 'react-router-dom';
import { api } from '../../services/api';
import { useEffect, useState } from 'react';

interface ProdutoProps{
    id: number,
    title: string,
    description: string,
    type: string,
    buttonType: string,
    image: string
}



export function Produto(props: ProdutoProps){
    const [image, setImage] = useState()

    const getImages = () => {
        api.get(`/Produto/ImagePath/${props.id}`).then((response) => {
            setImage(response.data.caminhos[0])
        })
    }

    useEffect(() => {
        getImages()
    }, [])

    return(
    <div className='wrapper-produto'>
        <div className='icon-produto'>
            <img src={`http://localhost:3333/static/${image}`} alt="" />
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
                    <Link to={"/Venda"}><button className="botao">{props.buttonType == 'Venda' ? 'Comprar' : 'Alugar'}</button></Link>
                </div>
            </div>
        </div>
    </div>

)}