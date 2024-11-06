import Erro from '../../components/Erro';
import './style.scss';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
export default function ListaAgendamentos() {
  const [paciente, setPacientes] = useState([]);
  const [agendamentosAll, setAgendamentosAll] = useState([]);
  const [agendamentos, setAgendamentos] = useState([]);
  const [openPopup, setOpenPopup] = useState(false);
  const [isNewAgendamento, setIsNewAgendamento] = useState(true);
  const [agendamentoEdit, setAgendamentoEdit] = useState(null);
  const [erro, setErro] = useState('')

  const token = localStorage.getItem('token')
  const url = process.env.REACT_APP_API_URL+"/agendamento"
  const urlP = process.env.REACT_APP_API_URL+"/paciente"

  async function salvar() {
    setOpenPopup(false);
    if (isNewAgendamento) {
      console.log("Novo Agendamento salvo!");
    } else {
      console.log("Agendamento alterado!");
    }
  }

  useEffect(() => {
    buscarAgendamentos()
    buscarPacientes()
  }, []);
  async function buscarAgendamentos(){
    axios.get(url+"?x-access-token="+token)
      .then(res => {
        setAgendamentosAll(res.data)
        setAgendamentos(res.data)
      })
      .catch(err => setErro(err.response.data.erro))
  }
  async function buscarPacientes(){
    axios.get(urlP+"?x-access-token="+token)
    .then(res => {
      setPacientes(res.data)
    })
    .catch(err => setErro(err.response.data.erro))
  }
  const handleEditClick = (agendamento) => {
    setAgendamentoEdit(agendamento);
    setIsNewAgendamento(false);
    setOpenPopup(true);
  };

  const handleNewClick = () => {
    setAgendamentoEdit(null);
    setIsNewAgendamento(true);
    setOpenPopup(true);
  };

  return (
    <div className="agendamento-main">
      <NavLink to="/admin/main" className="btn-dashboard"><img className='img-retorno' src="/assets/images/seta-circulo-esquerda.png"/>Dashboard</NavLink>
      <h2>Agendamentos</h2>
      <div className="search-bar">
        <input type="text" placeholder="Nome ou RG do paciente" />
        <button><img alt='buscar' src='/assets/images/lupa 1.svg' className='lupa'></img></button>
        <input type="text" placeholder="Data" />
        <button><img alt='buscar2' src='/assets/images/lupa 1.svg' className='lupa'></img></button>
        <button className='button-novo' onClick={handleNewClick}>+ Novo</button>
      </div>

      <div className="appointments-container">
        <div className="cards-container">
          {agendamentos.map((agendamento) => (
            <div key={agendamento.id} className="card">
              <div className="card-left">
                <div>
                  <strong> Paciente: </strong> {paciente.filter(p => p.id == agendamento.paciente)[0]?.nome}
                </div>
                <div>
                  <strong> Data da Consulta: </strong> {new Date(agendamento.data).toLocaleDateString()}
                </div>
                <div>
                  <strong> Status: </strong> {agendamento.status}
                </div>
              </div>
              <div className="card-center">
                <div>
                  <strong>RG:</strong> {paciente.filter(p => p.id == agendamento.paciente)[0]?.rg}
                </div>
                <div>
                  <strong>Horário:</strong> {agendamento.hora}
                </div>
                <div>
                  <strong>Tratamento:</strong> {agendamento.tratamento}
                </div>
              </div>
              <div className="card-right">
                <button className="edit-btn" onClick={() => handleEditClick(agendamento)}>Editar</button>
                <button className="view-btn">Ver Paciente</button>
                <button className="delete-btn">Apagar</button>
              </div>
            </div>
          ))}
        </div>

        {/*-----------------------------------------POPUP---------------------------------------------------------------*/}

        {openPopup && (
          <div className='page-agendamento'>
            <div className='form'>
              <div className="logo">
                <h3>{isNewAgendamento ? 'Novo Agendamento' : 'Alterar Agendamento'}</h3>
                <img className="limg" alt="logo" src="/assets/images/logo.svg" />
                <br />
              </div>
              <div>
                <h1 className='titulo-campo'>ㅤㅤRGㅤ:ㅤ</h1> <input type="text" placeholder="RG do Paciente" defaultValue={agendamentoEdit?.rg || ''} />
              </div>
              <div>
                <h1 className='titulo-campo'>ㅤㅤData :ㅤ </h1> <input type='text' placeholder="Data da Consulta" defaultValue={agendamentoEdit?.data || ''} />
              </div>
              <div>
                <h1 className='titulo-campo'>ㅤㅤHora :ㅤ </h1><input type="text" placeholder="Hora da Consulta" defaultValue={agendamentoEdit?.horario || ''} />
              </div>
              <div>
                <h1 className='titulo-campo'>ㅤㅤ  Status : </h1>
                <select defaultValue={agendamentoEdit?.status || 'Confirmado'}>
                  <option value="Agendado">Agendado</option>
                  <option value="Confirmado">Confirmado</option>
                  <option value="Cancelado">Cancelado</option>
                  <option value="Concluído">Concluído</option>
                </select>
              </div>
              <div>
                <h1 className='titulo-area'>Tratamento :</h1> <textarea placeholder="Tratamento" defaultValue={agendamentoEdit?.tratamento || ''} />
              </div>
              <div className='div-alterar'>
                <button className="agendar" onClick={salvar}>
                  {isNewAgendamento ? 'Salvar' : 'Alterar'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      {erro.length > 0?
                <Erro close={() => setErro('')} mensagem={erro}/>
                :''
      }
    </div>
  );
}
