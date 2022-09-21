import { ContentContainer } from "./styles";
import { Accordion, Panel } from "baseui/accordion";
import { FormControl } from "baseui/form-control";
import { Input } from "baseui/input";
import { Button } from "baseui/button";
import { Textarea } from "baseui/textarea";
import { useState } from "react";

export function ProdutosAdmin(){


    return(
        <ContentContainer>
            <h2>Produtos</h2>

            <Accordion>
                <Panel title="Cadastrar">
                    <form>
                        <FormControl
                            label={() => "Nome"}
                            caption={() => "Nome do Produto"}
                        >
                            <Input />
                        </FormControl>
                        <Textarea placeholder="Descrição do Produto"/>
                        
                        <FormControl
                            label={() => "Data de criação"}
                            caption={() => "Data em que foi fabricado e feito o produto"}
                        >
                            <Input />
                        </FormControl>
                        <FormControl
                            label={() => "Tipo"}
                            caption={() => "Alugado ou A Venda"}
                        >
                            <Input />
                        </FormControl>
                        <Button type="submit">Cadastrar</Button>
                    </form>
                </Panel>
                <Panel title="Alterar">Content 2</Panel>
                <Panel title="Deletar">Content 3</Panel>
            </Accordion>
        </ContentContainer>
    )
}