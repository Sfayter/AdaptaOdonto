import './style.scss'
import axios from 'axios'
import { NavLink, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Erro from '../../components/Erro'

const Sidebar = () => {

    return (
      <div className="sidebar">
        <div>
          <img src='/assets/images/logo.svg'></img>
          <h2>Adapta Odonto</h2>
        </div>        
        <ul>
          <li><NavLink to={"/admin/main"}>Dashboard</NavLink></li>
          <li><NavLink to={"/admin/agendamento"}>Agendamentos</NavLink></li>
          <li><NavLink to={"/admin/paciente"}>Pacientes</NavLink></li>
        </ul>
      </div>
    );
  };  
  const Dashboard = (props) => {
    const [agendamentos, setAgendamentos] = useState([])
    const [pacientes, setPacientes] = useState([])

    const urlA = process.env.REACT_APP_API_URL+"/agendamento"
    const urlP = process.env.REACT_APP_API_URL+"/paciente"
    const token = localStorage.getItem('token')
    useEffect(() => {
      buscarAgendamentos()
      buscarPacientes()
    }, [])
    async function buscarPacientes(){
      axios.get(urlP+"?x-access-token="+token)
      .then(res => {
        setPacientes(res.data)
      })
      .catch(err => props.erro(err.response.data.erro))
    }
    async function buscarAgendamentos(){
      axios.get(urlA+"?x-access-token="+token)
        .then(res => {
          setAgendamentos(res.data)
        })
        .catch(err => props.erro(err.response.data.erro))
    }
    return (
      <div className="dashboard">
        <div className="section">
          <h2>Agendamentos</h2>
          <div className="placeholder">
            {agendamentos.map(a => {
              return(
                <div> Paciente: {a.paciente != null? pacientes.filter(p => p.id === a.paciente)[0]?.nome : 'Não Definido'}  
                Data: {new Date(a.data).toLocaleDateString()} 
                Hora: {a.hora} 
                Status: {a.status} 
                Tratamento: {a.tratamento}</div>
                
              )
            })}
          </div>
        </div>
        <div className="section">
          <h2>Pacientes</h2>
          <div onClick={() => console.log(pacientes)} className="placeholder">Colocar aqui o Paciente</div>
        </div>
      </div>
    );
  };
  
  const DashboardLayout = () => {
    const [erro, setErro] = useState('')
    return (
      <div className="dashboard-layout">
        <Sidebar />
        <div className="main-content">
          <Dashboard erro={err => setErro(err)}/>
        </div>
        {erro.length > 0?
                <Erro close={() => setErro('')} mensagem={erro}/>
                :''
        }
      </div>
    );
  };
  
  export default DashboardLayout;