import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import "../styles/mandesuaideia.scss"
import mande from "../assets/img/mande_sua_ideia.png"
import { Question } from "../components/Question/Question";


export function MandeSuaIdeia(){
    return(
        <>
            <Header></Header>
            <div className="container-content">
                <img className="logo" src={mande} alt="" />
                <div className="container-questions">
                    <Question></Question>
                </div>
            </div>

            <Footer></Footer>
        </>
    )
}