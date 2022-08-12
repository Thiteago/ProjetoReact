import "./Question.scss"

interface QuestionProps{
    titulo: string;
}

export function Question(props:QuestionProps){
    return(
        <div className="wrapper-question">
            <div className="title-question">
                <h1>{props.titulo}</h1>
            </div>
            

        </div>
    )
}