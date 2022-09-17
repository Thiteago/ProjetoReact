import { useEffect, useState } from 'react';
import {ItemWrapper, Signal} from './itemStyle'

interface ItemProps {
    title: string;
    listenState: any;
}


export function Item(props : ItemProps){
    const [select, setSelect] = useState(false)

    useEffect(() => {
        props.listenState(select)
    }, [select])

    return(
        <>
            <ItemWrapper>
                <Signal 
                onClick={() => {
                    if(select){
                        setSelect(false)
                    }else{
                        setSelect(true)
                    }
                }}>
                    {select ? '+' : '-'}
                </Signal>
                <span>{props.title}</span>
            </ItemWrapper>
        </>
    )
}