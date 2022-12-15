import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Produto } from "../components/Produto/Produto";
import { Busca } from "../components/BarraDeBusca/BarraDeBusca";
import '../styles/produtos.scss';
import { useEffect, useState } from "react";
import { api } from "../services/api";

interface Produto {
  id: number,
  nome: string,
  descricao: string,
  tipo: string,
  valor: number,
  imagens: string
}

export function Produtos() {
  const [produto, setProduto] = useState<Produto[]>([{ id: 0, nome: '', descricao: '', tipo: '', valor: 0, imagens: '' }])
  const initialProductState = { id: 0, nome: '', descricao: '', tipo: '', valor: 0, imagens: '' }


  function getProdutos() {
    setProduto([initialProductState])
    api.get("/Produto").then((response) => {
      const prod: Produto[] = response.data.produtos
      console.log(prod)
      prod.forEach((item) => {
        setProduto(prevProduto => [
          ...prevProduto,
          {
            id: item.id,
            nome: item.nome,
            descricao: item.descricao,
            tipo: item.tipo,
            valor: item.valor,
            imagens: item.imagens
          }
        ])
      })
    })
    setProduto(produto.slice(1))
  }

  useEffect(() => {
    getProdutos()
  }, [])


  return (
    <>
      <Header tamanho="pequeno"></Header>

      <section className="product-grid">
        <Busca></Busca>

        <div className="wrapper-produtos">
          <aside className="container-filter">
            <h1>Filtrar</h1>

            <div className="wrapper-filter">
              <div>
                <input type="checkbox" /> <label>Alugados</label>
              </div>
              <div>
                <input type="checkbox" /> <label>A Venda</label>
              </div>
            </div>
          </aside>
          <div className="container-produtos">
            {produto.map((item) => {
              return (
                <Produto key={item.id} id={item.id} title={item.nome} description={item.descricao} type={item.tipo} buttonType={item.tipo} image={item.imagens}></Produto>
              )
            })}
          </div>
        </div>

      </section>



      <Footer></Footer>
    </>
  )
}