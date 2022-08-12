import "../Divider/Divider.scss"

interface DividerProps{
    titulo: string;
}


export function Divider(props:DividerProps){
    return(
        <h1 className="main-title">
            <span className="divider"></span>
                <p>{props.titulo}</p>
            <span className="divider"></span>    
        </h1>
    )
}