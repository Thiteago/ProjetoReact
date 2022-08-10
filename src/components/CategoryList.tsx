import '../styles/CategoryList.scss';
import avatar from '../assets/img/cliente-av-fit.png';

export function CategoryList(){
    return(
        <>
            <div className="container-cards">
                <div className='card-category'>
                    <div className="icon-category">
                        <img src={avatar} alt="#" />
                    </div>
                    <div className="info-category"></div>
                </div>
                <div className='card-category'></div>
            </div>
        </>
    )
}