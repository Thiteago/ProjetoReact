import { Link } from 'react-router-dom'
import '../PreviousButton/previousButton.scss'

interface PreviousProps{
    endereco: string;
}


export function PreviousButton(props: PreviousProps) {
    return (
        <>
            <Link to={props.endereco}>
                <div className="container-botao">
                    <a className="back botao">&#8249;</a>
                    <p>Voltar</p>
                </div>
            </Link>

        </>
    )
}

export default PreviousButton