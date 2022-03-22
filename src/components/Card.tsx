import '../styles/card.scss';
import avatar from '../assets/img/cliente-av-fit.png';
import iconcart from '../assets/icons/cart.svg';

export function Card(){
    return(
        <>
            <div className="card">
                        <div className="img">
                            <img src={avatar} alt="avatar"/>
                        </div>
                        <div className="content">
                            <div className="wrapper-title">
                                <div className="title">Titulo 1</div>
                                <div className="icon-buy">
                                    <img src={iconcart} alt="" />
                                </div>
                            </div>
                            <p>qjweowqjeijoiasjeoiajoiajeioajeoaseoiseioasjeoiasjeiosajeoa</p>
                        </div>
                    </div>
        </>
    )
}