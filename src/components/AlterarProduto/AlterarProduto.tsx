import {useForm} from 'react-hook-form'
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import { ContainerButtons } from '../ProdutoController/style';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { api } from '../../services/api';

interface ProdutoProps{
    id: number;
    nome: string;
    descricao: string;
    dataCriacao: string;
    tipo: string;
    valor: number;
    altura: string;
    largura: string;
    comprimento: string;
    material: string;
    categoria: string;
    imagens: string[];
}

export function AlterarProduto(props: ProdutoProps){
    const today = new Date().toLocaleDateString('en-ca')
    const {register, handleSubmit, reset} = useForm();
    const [selectedFile, setSelectedFile] = useState<FileList[]>([]);
    const [result, setResult] = useState({
        variant: '', title: ''
    })
    const [state, setState] = useState({
        id: props.id,
        nome: props.nome,
        descricao: props.descricao,
        dataCriacao: props.dataCriacao,
        tipo: props.tipo,
        valor: props.valor,
        altura: props.altura,
        largura: props.largura,
        comprimento: props.comprimento,
        material: props.material,
        categoria: props.categoria,
        imagens: props.imagens
    })
    useEffect(() => {
        reset({state})
        setState({
            id: props.id,
            nome: props.nome,
            descricao: props.descricao,
            dataCriacao: props.dataCriacao,
            tipo: props.tipo,
            valor: props.valor,
            altura: props.altura,
            largura: props.largura,
            comprimento: props.comprimento,
            material: props.material,
            categoria: props.categoria,
            imagens: props.imagens
        })
    }, [props])

    console.log(state)
    console.log(props)



    useEffect(() => {
        console.log()
    }, [selectedFile])


    const changeHandler = (event) => {
        setSelectedFile(event.target.files)
	};

    const handleProdutoUpdate = (e) =>{
        const data = e
        api.patch(`/Produto/${props.id}/Alterar`, data).then((response) => {
            if(response.status == 201){
                setResult({variant: 'success', title: 'Produto Alterado com sucesso!'})
            }
        }).catch((error) => {
            if(error.response.status == 400){
                setResult({variant: 'danger', title: 'Nome do produto informado é invalido! Pois ja existe em nosso banco de dados'})
            }
        })
    }    

    return(
        <form encType='multipart/file-data' onSubmit={handleSubmit(handleProdutoUpdate)}>
            <Form.Group key={state.nome} className="mb-3" controlId="formBasicName">
                <Form.Label>Nome</Form.Label>
                <Form.Control {...register("nome")}  defaultValue={state.nome} required type="text" placeholder="Insira o nome" />
                <Form.Text className="text-muted">
                Informe o nome de identificação do Produto
                </Form.Text>
            </Form.Group>

            <Form.Group key={state.categoria} className="mb-3" controlId="formBasicEmail">
                <Form.Label>Categoria</Form.Label>
                <Form.Select {...register("categoria")} defaultValue={state.categoria} required aria-label="Default select example">
                    <option>Selecione a categoria do Produto</option>
                    <option value="Topo de Bolo">Topo de Bolo</option>
                    <option value="Painel">Painel</option>
                </Form.Select>
            </Form.Group>

            <Form.Group key={state.descricao} className="mb-3" controlId="formBasicEmail">
                <Form.Label>Descrição</Form.Label>
                <Form.Control {...register("descricao")} defaultValue={state.descricao} required as="textarea" style={{height: '150px', resize: 'none'}} type="text" placeholder="Descrição do Produto" />
                <Form.Text className="text-muted">
                Insira a descrição completa do produto
                </Form.Text>
            </Form.Group>

            <Form.Group key={state.dataCriacao} className="mb-3" controlId="formBasicEmail">
                <Form.Label>Data de Fabricação</Form.Label>
                <Form.Control {...register("dataCriacao")} defaultValue={state.dataCriacao} max={today} required type="date" placeholder="DD/MM/YYYY" />
                <Form.Text className="text-muted">
                Insira a data em que o produto foi criado
                </Form.Text>
            </Form.Group>

            <Form.Group key={state.tipo} className="mb-3" controlId="formBasicEmail">
                <Form.Label>Tipo</Form.Label>
                <Form.Select {...register("tipo")} defaultValue={state.tipo} required aria-label="Default select example">
                    <option>Selecione o Tipo de negociação</option>
                    <option value="Venda">Venda</option>
                    <option value="Aluguel">Aluguel</option>
                </Form.Select>
            </Form.Group>

            <Form.Group key={state.valor+1} className="mb-3" controlId="formBasicEmail">
                <Form.Label>Valor</Form.Label>
                <Form.Control {...register("valor")} defaultValue={state.valor} required type="number" placeholder="R$ 0,00" />
                <Form.Text className="text-muted">
                Informe o valor a ser cobrado pela Compra/Aluguel do Produto
                </Form.Text>
            </Form.Group>

            <Form.Group key={state.altura+2} className="mb-3" controlId="formBasicEmail">
                <Form.Label>Altura</Form.Label>
                <Form.Control {...register("altura")} defaultValue={state.altura} required type="number" placeholder="0 cm" />
                <Form.Text className="text-muted">
                Informe a altura do produto em centimetros
                </Form.Text>
            </Form.Group>

            <Form.Group key={state.largura+3} className="mb-3" controlId="formBasicEmail">
                <Form.Label>Largura</Form.Label>
                <Form.Control {...register("largura")} defaultValue={state.largura} required type="number" placeholder="0 cm" />
                <Form.Text className="text-muted">
                Informe a largura do produto em centimetros
                </Form.Text>
            </Form.Group>

            
            <Form.Group key={state.comprimento+4} className="mb-3" controlId="formBasicEmail">
                <Form.Label>Comprimento</Form.Label>
                <Form.Control {...register("comprimento")} defaultValue={state.comprimento} required type="number" placeholder="0 cm" />
                <Form.Text className="text-muted">
                Informe o comprimento do produto em centimetros
                </Form.Text>
            </Form.Group>

            <Form.Group key={state.material} className="mb-3" controlId="formBasicEmail">
                <Form.Label>Material</Form.Label>
                <Form.Control {...register("material")} defaultValue={state.material} required type="text" placeholder="Ex: Feltro, Plastico, etc.." />
                <Form.Text className="text-muted">
                Informe o tipo de material do produto
                </Form.Text>
            </Form.Group>
            <Form.Group controlId="formFileMultiple" className="mb-3">
                <Form.Label>Imagens</Form.Label>
                <Form.Control onChange={changeHandler} name='file[]' type="file" multiple />
            </Form.Group>
            
            <ContainerButtons>
                <Button variant="dark" type={'submit'}>Alterar</Button>
            </ContainerButtons>
            {<Alert style={{marginTop: '15px'}} variant={result.variant}>{result.title}</Alert>}
        </form>
    )
}