import '../styles/login.scss';
import PreviousButton from '../components/PreviousButton/PreviousButton';
import { useContext, useRef, useState } from 'react';
import {Link, Navigate, useNavigate} from 'react-router-dom';
import { AuthContext } from '../context/auth';


export function Login() {
    const [current, setCurrent] = useState("container");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const {login, signed} = useContext(AuthContext);

    const message = useRef<HTMLParagraphElement>(null);

    const handleLogin = async (e) => {
        e.preventDefault();
        const data = {
            email, senha,
        };
        await login(data);
    }


    if(!signed){
    return (
        <>
            <div className="body">
                <div className={current} id="container">
                    <div className="form-container sign-up-container">
                        <form className="form" action="#">
                            <h1 className="h1">Criar uma Conta</h1>
                            <Link to={"/Registro"}><button className="button">Cadastrar-se</button></Link>
                        </form>
                    </div>
                    <div className="form-container sign-in-container">
                    <PreviousButton endereco='/'></PreviousButton>
                        <form onSubmit={handleLogin} className="form" action="#">
                            <h1 className="h1">Login</h1>
                            <span className="span">acesse sua conta</span>
                            <input className="input" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
                            <input className="input" value={senha} onChange={(e) => setSenha(e.target.value)} type="password" placeholder="Senha" />
                            <p ref={message} style={{color: 'red', display: 'none'}}>Credenciais Inválidas</p>
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
    )}else {
        return <Navigate to="/" />
    }
}