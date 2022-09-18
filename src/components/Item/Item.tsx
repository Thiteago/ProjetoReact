import { useState } from 'react';
import {ItemWrapper, Signal} from './itemStyle'

interface ItemProps {
    id: number;
    key: any;
    title: string;
    status: boolean;
    changeState: any;
}



export function Item(props : ItemProps){
    const [select, setSelect] = useState(true);

    
    return(
        <>
            <ItemWrapper>
                <Signal onClick={() => {if(select === true){setSelect(false)}else{setSelect(true)} props.changeState(props.id, select)}}>{props.status ? "-" : "+"}</Signal>
                <span>{props.title}</span>
            </ItemWrapper>
        </>
    )
}