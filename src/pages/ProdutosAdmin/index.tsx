import { ContentContainer } from "./styles";

import { AccordionComponent } from "../../components/ProdutoController";


export function ProdutosAdmin(){

    return(
        <ContentContainer>
            <h2>Produtos</h2>
            <AccordionComponent/>
        </ContentContainer>
    )
}