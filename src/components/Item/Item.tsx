import { useState } from 'react';
import {ItemWrapper, Signal} from './itemStyle'

interface ItemProps {
    id: number;
    key: any;
    title: string;
    changeState: any;
}



export function Item(props : ItemProps){
    const [select, setSelect] = useState(true);

    return(
        <>
            <ItemWrapper>
                <Signal onClick={() => {if(select === false){setSelect(true)}else{setSelect(false)} props.changeState(props.id, select)}}>{select ? "+" : "-"}</Signal>
                <span>{props.title}</span>
            </ItemWrapper>
        </>
    )
}