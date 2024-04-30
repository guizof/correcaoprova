import './App.css'
import Evento from './components/Evento.jsx'
import Galeria from './components/Galeria.jsx'
import Cabecalho from './components/Cabecalho.jsx'
import Rodape from './components/Rodape.jsx'

function App() {
  return(
    <>
    <Cabecalho />
    <Evento
    titulo={"Evento do senai"}
    descricao={"Descrição do evento"}
    horario={"29/04/2024 as 11 horas"}
    local={"Senai São José"}
    />
    <Galeria />
    <Rodape />
    </>
  )
}

export default App