import Accordion from 'react-bootstrap/Accordion';
import Modal from 'react-bootstrap/Modal';
import {useForm} from 'react-hook-form'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useEffect, useRef, useState } from 'react';
import { api } from '../../services/api';
import Alert from 'react-bootstrap/Alert';
import { ContainerButtons } from './style';
import { AlterarProduto } from '../AlterarProduto/AlterarProduto';
import { Produto } from '../Produto/Produto';

interface Produto{
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

export function AccordionComponent(){
    const {register, handleSubmit} = useForm();
    const [result, setResult] = useState({
        variant: '', title: ''
    })
    const selectRef = useRef<HTMLSelectElement>(null)
    const [selectedFile, setSelectedFile] = useState<FileList[]>([]);
    const [select, setSelect] = useState(false)
    const [selected, setSelected] = useState({id: 0, nome: '',descricao:'' ,dataCriacao: '',
    tipo: '',
    valor: 0,
    altura: '',
    largura: '',
    comprimento: '',
    material: '',
    categoria: '',
    imagens: ['']})
    const [produto, setProduto] = useState<Produto[]>([{id: 0, nome: '',descricao:'' ,dataCriacao: '',
    tipo: '',
    valor: 0,
    altura: '',
    largura: '',
    comprimento: '',
    material: '',
    categoria: '',
    imagens: []}])

    const today = new Date().toLocaleDateString('en-ca')
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = () => {
        if(selectRef.current != null){
            const item = selectRef.current.options.selectedIndex
            const el = selectRef.current.children
            const id = el[item].id

            api.delete(`/Produto/${id}/Deletar`).then((response) => {
                if(response.status == 201){
                    setShow(false)
                    setResult({variant: 'success', title: 'Produto excluído com sucesso!'})
                    getProdutos()
                    selectRef.current?.remove(item)
                    
                }
            }).catch((error) => {
                if(error.response.status == 400){
                    setResult({variant: 'danger', title: 'Erro ao Excluir o Produto!'})
                }
            })
            
            
        }
        


        // setShow(false)
    }


    useEffect(() => {
        console.log()
    }, [selectedFile])

    useEffect(() => {
        getProdutos()
    }, [])

    const obj = {
        id: selected.id,
        nome: selected.nome,
        descricao: selected.descricao,
        altura: selected.altura,
        categoria: selected.categoria,
        comprimento: selected.comprimento,
        dataCriacao: selected.dataCriacao,
        imagens: selected.imagens,
        largura: selected.largura,
        material: selected.material,
        tipo: selected.tipo,
        valor: selected.valor
    }



    const changeHandler = (event) => {
        setSelectedFile(event.target.files)
	};

    const getProdutos = () => {
        api.get("/Produto").then((response)=> {
            const prod : Produto[] = response.data.produtos

            prod.forEach((item) => {
                if(produto.length == 1){
                    setProduto(prevProduto => [
                        ...prevProduto,
                        {id: item.id, nome: item.nome, descricao: item.descricao, 
                        dataCriacao: item.dataCriacao, tipo: item.tipo, valor: item.valor, 
                        altura: item.altura, largura: item.largura, comprimento: item.comprimento,
                        material: item.material, categoria: item.categoria, imagens: item.imagens
                    }
                    ])
                }
            })            
        })
    }

    const handleSelectChange = (e) => {
        e.target.value != 'Selecione um Produto' ? setSelect(true) : setSelect(false)

        const nome = produto.filter(element => element.nome == e.target.value)

        nome.forEach((item)=> {
            setSelected({id: item.id, nome: item.nome, descricao: item.descricao, dataCriacao: item.dataCriacao, tipo: item.tipo, valor: item.valor, altura: item.altura, largura: item.largura, comprimento: item.comprimento, material: item.material, categoria: item.categoria, imagens: item.imagens
            })
        })
    }

    const handleProdutoSave = (e) => {
        const data = e
        
        const formData:any = new FormData();
        formData.append('nome', data.nome)
        formData.append('categoria', data.categoria)
        formData.append('descricao', data.descricao)
        formData.append('dataCriacao', data.dataCriacao)
        formData.append('tipo', data.tipo)
        formData.append('valor', data.valor)
        formData.append('altura', data.altura)
        formData.append('largura', data.largura)
        formData.append('comprimento', data.comprimento)
        formData.append('material', data.material)
        if(selectedFile?.length != null){
            for (let i = 0; i < selectedFile.length; i++) {
                formData.append('file[]', selectedFile[i])
            }
        }
        


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
                            <Form.Control onChange={changeHandler} name='file[]' type="file" multiple />
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
                        <form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Select onChange={handleSelectChange} aria-label="Default select example">
                                <option>Selecione um Produto</option>
                                {produto.map((item) => {
                                    return(
                                        <option key={item.id}>{item.nome}</option>
                                    )
                                })}
                            </Form.Select>
                        </Form.Group>
                        </form>
                        {select ? 
                            <AlterarProduto {...obj}/>
                            :
                            <></>
                        }
                        
                    </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
                <Accordion.Header>Excluir</Accordion.Header>
                <Accordion.Body>
                <form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Select ref={selectRef} onChange={handleSelectChange} aria-label="Default select example">
                                <option>Selecione um Produto</option>
                                {produto.map((item) => {
                                    return(
                                        <option id={String(item.id)} key={item.id}>{item.nome}</option>
                                    )
                                })}
                                <Alert variant={result.variant}>{result.title}</Alert>
                            </Form.Select>
                        </Form.Group>
                        <Button variant="primary" onClick={handleShow}>Excluir</Button>
                        {<Alert style={{marginTop: '15px'}} variant={result.variant}>{result.title}</Alert>}
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                            <Modal.Title>Excluir Produto</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Voce tem certeza que deseja excluir o produto <b>{selectRef.current?.value}?</b></Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Fechar
                            </Button>
                            <Button variant="danger" onClick={handleDelete}>
                                Excluir
                            </Button>
                            </Modal.Footer>
                        </Modal>
                        </form>
                </Accordion.Body>
            </Accordion.Item>
    </Accordion>
    )
}



