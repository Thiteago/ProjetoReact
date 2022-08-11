import "../Divider/Divider.scss"
import * as React from 'react'

export function Divider(props){
    return(
        <h1 className="main-title">
            <span className="divider"></span>
                <p>{props.titulo}</p>
            <span className="divider"></span>    
        </h1>
    )
}