import { Link } from 'react-router-dom'
import '../PreviousButton/previousButton.scss'

export function PreviousButton() {
    return (
        <>
            <Link to="/">
                <div className="container-botao">
                    <a className="back botao">&#8249;</a>
                    <p>Voltar</p>
                </div>
            </Link>

        </>
    )
}

export default PreviousButton