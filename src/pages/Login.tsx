import '../styles/login.scss';
import PreviousButton from '../components/PreviousButton/PreviousButton';
import { useState } from 'react';
import {Link} from 'react-router-dom'

export function Login() {

    const [current, setCurrent] = useState("container");

    return (
        <>
            <div className="body">
                <div className={current} id="container">
                    <div className="form-container sign-up-container">
                        <form className="form" action="#">
                            <h1 className="h1">Criar uma Conta</h1>
                            <Link to={"./Registro"}><button className="button">Cadastrar-se</button></Link>
                        </form>
                    </div>
                    <div className="form-container sign-in-container">
                    <PreviousButton endereco='./'></PreviousButton>
                        <form className="form" action="#">
                            <h1 className="h1">Login</h1>
                            <span className="span">acesse sua conta</span>
                            <input className="input" type="email" placeholder="Email" />
                            <input className="input" type="password" placeholder="Senha" />
                            <a className="a" href="#">Esqueceu a senha?</a>
                            <button className="button">Login</button>
                        </form>
                    </div>
                    <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay-panel overlay-left">
                                <h1 className="h1">Ola!</h1>
                                <p className="p">Para realizar o cadastro , clique em Cadastrar!</p>
                                <span>Ja possui cadastro?</span>
                                <button onClick={() => setCurrent("container")} className="ghost button" id="signIn">Login</button>
                            </div>
                            <div className="overlay-panel overlay-right">
                                <h1 className="h1-registro">Bem-Vindo de Volta!</h1>
                                <p className="p">para acessar sua conta , por favor , informe as seguintes informações.</p>
                                <span>ou</span>
                                <button onClick={() => setCurrent("container right-panel-active")} className="ghost button" id="signUp">Cadastrar-se</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}