
import React from 'react'
function Evento({titulo, descricao, horario, local}){
    return(
        <section className="Evento">
            <div className="Informacao"> 
            <h1>{titulo}</h1>
            <p>{descricao}</p>
            <p>{horario}</p>
            <p>{local}</p>
            </div>
            <img src="cr71.jfif" alt="imagem" />
        </section>
    )
}
export default Evento
