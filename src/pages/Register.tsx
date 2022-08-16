import '../styles/register.scss';
import PreviousButton from '../components/PreviousButton/PreviousButton';

export function Register() {

    return (
        <>
            <div className="body">
                <div className="container">
                    <div className='header'>
                        <PreviousButton endereco='./Login'></PreviousButton>
                        <div className="title">
                            <h1>Registre-se</h1>
                        </div>
                    </div>
                    <div className='wrapper-form'>
                        {/*nome, dataNascimento, email, senha, cpf, rua, numeroRua, bairro, cidade, cep, numeroTel, numeroCel */}
                        <form className='form-subscribe' action="#">
                            <input placeholder='NOME' type="text" />
                            <input placeholder='EMAIL' type="text" />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}