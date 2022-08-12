import LocateIcon from '../../assets/icons/location.svg';
import Card from '../../assets/icons/card.svg';
import Locker from '../../assets/icons/lock.svg';
import "./BuyInfo.scss"

export function BuyInfo(){
    return(
        <div className="wrapper-maisvendidos">
            <div className="locate-info">
                <img src={LocateIcon} alt="" />
                <p>Encomendas para Campos do Jordão e Região</p>
            </div>
            <div className="locate-info">
                <img src={Card} alt="" />
                <p>COMPRAS EM ATÉ 3x sem juros</p>
            </div>

            <div className="locate-info">
                <img src={Locker} alt="" />
                <p>SITE SEGURO compre tranquilo</p>    
            </div>
        </div>
    )
}