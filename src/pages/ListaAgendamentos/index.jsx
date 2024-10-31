import { Link } from "react-router-dom"
export default function ListaAgendamentos(){
    return(
        <div className="page-lista-agendamentos">
            <h1>Agendamentos:</h1>
            <p>WIP...</p>
            <Link to="/admin/agendamento/novo">Novo Agendamento</Link>
        </div>
    )
}