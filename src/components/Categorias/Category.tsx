import '../Categorias/Category.scss';
import avatar from '../../assets/img/cliente-av-fit.png';

export function Category(){
    return(
        <>
            <div className="container-cards">
                <div className='card-category'>
                    <div className="icon-category">
                        <img src={avatar} alt="#" />
                    </div>
                    <div className="info-category">
                        <div className='title'><h1>Titulo</h1></div>
                        <div className='description'>Descrição</div>
                    </div>
                </div>
            </div>
        </>
    )
}