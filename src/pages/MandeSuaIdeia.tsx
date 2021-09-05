import { Header } from "../components/Header";
import img from "../assets/img/mande_sua_ideia.png"
import { Footer } from "../components/Footer";
import "../styles/mandesuaideia.scss"


export function MandeSuaIdeia(){
    return(
        <>
            <Header></Header>
            <section className="main-ideia">
                <div className="logo">
                    <img src={img} alt="" />
                </div>
                <div className="form">
                    <h1>Enviar</h1>
                    <p>Preencha o formulário e nos envie sua ideia, iremos verificar e entraremos em contato .</p>

                    <form className="main-form" action="" method="POST">
                        <label htmlFor="nome">Nome</label>
                        <br/>
                        <input type="text" id="nome"/>
                        <br/><br/>
                        <label htmlFor="descricao">Descricao</label>
                        <br/>
                        <textarea name="description" id="descricao" cols={30} rows={10}></textarea>
                        <br/><br/>
                        <label htmlFor="anexo">Anexos</label>
                        <br/>
                        <input type="file" multiple/>
                        <br/>
                        <input type="submit" className="submit" value="Enviar"/>
                    </form>
                </div>
            </section>
            
            <Footer></Footer>
        </>
    )
}