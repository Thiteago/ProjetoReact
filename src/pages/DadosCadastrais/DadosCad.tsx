import { ButtonSubmit } from "../../components/IdeiaQuestion/ideiaquestionStyle";
import { DadosContainer, DadosWrapper, FieldSet, InputInfo, LegendaField } from "./styles";
import { api } from '../../services/api';
import {AuthContext} from '../../context/auth'
import { useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import InputMask from 'react-input-mask'

interface User {
    id: number;
    nome: string;
    dataNascimento: string,
    email: string,
    cpf: string,
    rua: string,
    numeroRua: number,
    bairro: string,
    cidade: string,
    cep: string,
    numeroTel: string,
    numeroCel: string
}

export function DadosCad(){
    const {register, handleSubmit} = useForm();
    const [localUser , setLocaluser] = useState<User>({
        id: 1, nome: 'default', dataNascimento: '00-00-0000', email: 'default', cpf: 'default', rua: 'default', numeroRua: 1, bairro: 'default', cidade: 'default', cep: 'default', numeroCel: 'default', numeroTel: 'default' 
    })
    const {user} = useContext(AuthContext)
    const history = useNavigate();
    const dataNasc = new Date(localUser.dataNascimento)

    useEffect(() => {
        api.get(`/Usuarios/${user.id}/dados`).then(response => {
            setLocaluser(response.data)  
        })
    }, [])

    const handleUpdateUser = (e) =>{
        const data = e;

        api.patch(`/Usuarios/${user.id}/Alterar`, data).then((response) => {
            if(response.status == 201){
                history("/Perfil")
                alert("Dados alterados com sucesso!")
            }
        }).catch((error) => {
            if(error.response.status == 400){
                alert("O email informado ja esta registrado em outro usuário, por favor insira um novo email")
            }
        })
    }

    return (
        <DadosContainer>
            <h1>Seus Dados</h1>
            <DadosWrapper>
                <form onSubmit={handleSubmit(handleUpdateUser)} >
                    <FieldSet className="w-75 border p-2 d-flex flex-column">
                        <LegendaField className="w-auto" >Nome Completo *</LegendaField>
                        <InputInfo readOnly type="text" placeholder={localUser.nome}/>
                    </FieldSet>
                    <FieldSet className="w-75 border p-2 d-flex flex-column">
                        <LegendaField className="w-auto">Email / Login *</LegendaField>
                        <InputInfo type="text" {...register("email")} placeholder={localUser.email}/>
                    </FieldSet>
                    <FieldSet className="w-75 border p-2 d-flex flex-column">
                        <LegendaField className="w-auto" readOnly>CPF *</LegendaField>
                        <InputInfo readOnly type="text"  placeholder={localUser.cpf}/>
                    </FieldSet>
                    <FieldSet className="w-75 border p-2 d-flex flex-column">
                        <LegendaField className="w-auto" readOnly>Data de Nascimento *</LegendaField>
                        <InputInfo readOnly type="text"  placeholder={dataNasc.toDateString()}/>
                    </FieldSet>
                    <FieldSet className="w-75 border p-2 d-flex flex-column">
                        <LegendaField className="w-auto">Telefone celular *</LegendaField>
                        <InputMask mask="(99) 999999999" type="text" {...register("numeroCel")} placeholder={localUser.numeroCel}/>
                    </FieldSet>
                    <ButtonSubmit type='submit'>Alterar</ButtonSubmit>
                </form>
            </DadosWrapper>
        </DadosContainer>
    )
}