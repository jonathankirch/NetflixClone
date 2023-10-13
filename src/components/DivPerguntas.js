
function DivPerguntas({pergunta, resposta}) {
    return(
        <div >
            <details>
                <summary><span>{pergunta}</span></summary>
                <p>{resposta}</p>
            </details>
        </div>
    )
}

export default DivPerguntas