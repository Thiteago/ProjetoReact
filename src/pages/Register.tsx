import '../styles/register.scss';
import PreviousButton from '../components/PreviousButton/PreviousButton';
import InputMask from 'react-input-mask'
import {useForm} from 'react-hook-form'
import {useNavigate} from "react-router-dom"
import { api } from '../services/api';


export function Register() {
    const history = useNavigate();
    const {register, handleSubmit} = useForm();

    const handleSaveUser = (e) => {
        const data = e;
        api.post("/NovoUsuario", data).then((response) =>{
            console.log(response);
            if(response.status == 201){
                 history("/Login")
            }
        });
    }
    

    return (
        <>
            <div className="body">
                <div className="container">
                    <div className='header'>
                        <PreviousButton endereco='/Login'></PreviousButton>
                        <div className="title">
                            <h1>Registre-se</h1>
                        </div>
                    </div>
                    <div className='wrapper-form'>
                        {/*nome, dataNascimento, email, senha, cpf, rua, numeroRua, bairro, cidade, cep, numeroTel, numeroCel */}
                        <form  onSubmit={handleSubmit(handleSaveUser)} className='form-subscribe' action="#">
                            <input placeholder='NOME' type="text" required {...register("nome")}/>
                            <input placeholder='EMAIL' type="text" required {...register("email")}/>
                            <input type="date" required {...register("dataNascimento")}/>
                            <input placeholder="SENHA" type="password" required {...register("senha")}/>
                            <InputMask placeholder="CPF" mask="999.999.999-99" required {...register("cpf")}></InputMask>
                            <input placeholder="CONFIRME A SENHA" type="password" required />
                            <input placeholder='Rua' type="Text" required {...register("rua")}/>
                            <input placeholder='Numero' type="number" required {...register("numeroRua")}/>
                            <input placeholder='Bairro' type="text" required {...register("bairro")}/>
                            <input placeholder='Cidade' type="text" required {...register("cidade")}/>
                            <InputMask placeholder='CEP' mask="99999-999" type="text" required {...register("cep")}/>
                            <InputMask placeholder='Numero de Telefone' mask="(99) 99999999" type="text" {...register("numeroTel")}/>
                            <InputMask placeholder='Numero de Celular' mask="(99) 999999999" type="text" required {...register("numeroCel")}/>
                            
                            <input className='submit' type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}