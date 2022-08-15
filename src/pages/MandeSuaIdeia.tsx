import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import "../styles/mandesuaideia.scss"
import mande from "../assets/img/mande_sua_ideia.png";


export function MandeSuaIdeia(){
    return(
        <>
            <Header></Header>
            <div className="container-content">
                <div className="container-logo">
                    <img className="logo" src={mande} alt="" />
                </div>
            </div>

            <Footer></Footer>
        </>
    )
}