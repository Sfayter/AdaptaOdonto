import './style.scss';
import React, { useState, useEffect } from 'react';

export default function ListaAgendamentos() {
  const [agendamentos, setAgendamentos] = useState([]);
  const [openPopup, setOpenPopup] = useState(false);
  const [isNewAgendamento, setIsNewAgendamento] = useState(true);
  const [agendamentoEdit, setAgendamentoEdit] = useState(null);

  const url = process.env.REACT_APP_API_URL+"/agendamento"

  async function salvar() {
    setOpenPopup(false);
    if (isNewAgendamento) {
      console.log("Novo Agendamento salvo!");
    } else {
      console.log("Agendamento alterado!");
    }
  }

  useEffect(() => {
    setAgendamentos([
      { id: 1, paciente: 'João Silva', data: '2024-11-03', status: 'Confirmado', rg: '123456789', tratamento: 'Limpeza', horario: '10:00' },
      { id: 2, paciente: 'Maria Oliveira', data: '2024-11-04', status: 'Pendente', rg: '987654321', tratamento: 'Obturação', horario: '11:30' }
    ]);
  }, []);

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
                  <strong> Paciente: </strong> {agendamento.paciente}
                </div>
                <div>
                  <strong> Data da Consulta: </strong> {agendamento.data}
                </div>
                <div>
                  <strong> Status: </strong> {agendamento.status}
                </div>
              </div>
              <div className="card-center">
                <div>
                  <strong>RG:</strong> {agendamento.rg}
                </div>
                <div>
                  <strong>Horário:</strong> {agendamento.horario}
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
                <h1 className='titulo-campo'>ㅤㅤ  Status : </h1><select defaultValue={agendamentoEdit?.status || 'Confirmado'}>
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
    </div>
  );
}
