import Accordion from 'react-bootstrap/Accordion';
import {useForm} from 'react-hook-form'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { api } from '../../services/api';
import Alert from 'react-bootstrap/Alert';
import { ContainerButtons } from './style';
import Modal from 'react-bootstrap/Modal';


export function AccordionComponent(){
    const {register, handleSubmit} = useForm();
    const [optionState, setOptionState] = useState({value: ''});
    const [result, setResult] = useState({
        variant: '', title: ''
    })
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [selectedFile, setSelectedFile] = useState("");

    const today = new Date().toLocaleDateString('en-ca')

    const changeHandler = (event) => {
        let number = 0
        while(number < event.target.files.length){
            setSelectedFile(event.target.files[number])
            
            number++
        }
        console.log(event.target.files.length)
        
		console.log(selectedFile)
	};


    const handleProdutoSave = (e) => {
        const data = e
        
        const formData = new FormData();
        for (let i = 0; i < selectedFile.length; i++) {
            formData.append('file[]', selectedFile[i])
          }
        formData.append('nome', data.nome)
        formData.append('descricao', data.descricao)
        formData.append('dataCriacao', data.dataCriacao)
        formData.append('tipo', data.tipo)
        formData.append('valor', data.tipo)
        formData.append('altura', data.altura)
        formData.append('largura', data.largura)
        formData.append('comprimento', data.comprimento)
        formData.append('material', data.material)
        formData.append('categoria', data.categoria)


        api.post('/Produto/Cadastrar', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
              }
        }).then((response) => {
            if(response.status == 201){
                setResult({variant: 'success', title: 'Produto cadastrado com sucesso'})
            }
        }).catch((error) => {
            if(error.response.status == 500){
                setResult({variant: 'danger', title: 'Erro ao cadastrar o produto'})
            }
        })
    }


    return (
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Cadastrar</Accordion.Header>
                    <Accordion.Body>
                        <form encType='multipart/file-data' onSubmit={handleSubmit(handleProdutoSave)}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control {...register("nome")} required type="text" placeholder="Nome do Produto" />
                            <Form.Text className="text-muted">
                            Informe o nome de identificação do Produto
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Categoria</Form.Label>
                            <Form.Select {...register("categoria")} required aria-label="Default select example">
                                <option>Selecione a categoria do Produto</option>
                                <option value="Topo de Bolo">Topo de Bolo</option>
                                <option value="Painel">Painel</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Descrição</Form.Label>
                            <Form.Control {...register("descricao")} required as="textarea" style={{height: '150px', resize: 'none'}} type="text" placeholder="Descrição do Produto" />
                            <Form.Text className="text-muted">
                            Insira a descrição completa do produto
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Data de Fabricação</Form.Label>
                            <Form.Control {...register("dataCriacao")} max={today} required type="date" value={today} placeholder="DD/MM/YYYY" />
                            <Form.Text className="text-muted">
                            Insira a data em que o produto foi criado
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Tipo</Form.Label>
                            <Form.Select {...register("tipo")} required aria-label="Default select example">
                                <option>Selecione o Tipo de negociação</option>
                                <option value="Venda">Venda</option>
                                <option value="Aluguel">Aluguel</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Valor</Form.Label>
                            <Form.Control {...register("valor")} required type="number" placeholder="R$ 0,00" />
                            <Form.Text className="text-muted">
                            Informe o valor a ser cobrado pela Compra/Aluguel do Produto
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Altura</Form.Label>
                            <Form.Control {...register("altura")} required type="number" placeholder="0 cm" />
                            <Form.Text className="text-muted">
                            Informe a altura do produto em centimetros
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Largura</Form.Label>
                            <Form.Control {...register("largura")} required type="number" placeholder="0 cm" />
                            <Form.Text className="text-muted">
                            Informe a largura do produto em centimetros
                            </Form.Text>
                        </Form.Group>

                        
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Comprimento</Form.Label>
                            <Form.Control {...register("comprimento")} required type="number" placeholder="0 cm" />
                            <Form.Text className="text-muted">
                            Informe o comprimento do produto em centimetros
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Material</Form.Label>
                            <Form.Control {...register("material")} required type="text" placeholder="Ex: Feltro, Plastico, etc.." />
                            <Form.Text className="text-muted">
                            Informe o tipo de material do produto
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formFileMultiple" className="mb-3">
                            <Form.Label>Imagens</Form.Label>
                            <Form.Control onChange={changeHandler} name='file' type="file" multiple />
                        </Form.Group>
                       
                        <ContainerButtons>
                            <Button variant="dark" type={'submit'}>Cadastrar</Button>
                        </ContainerButtons>
                        {<Alert style={{marginTop: '15px'}} variant={result.variant}>{result.title}</Alert>}
                        </form>
                    </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
                <Accordion.Header>Alterar</Accordion.Header>
                    <Accordion.Body>
                        <h1>oie</h1>
                    </Accordion.Body>
            </Accordion.Item>
    </Accordion>
    )
}

