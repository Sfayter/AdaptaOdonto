import './style.scss';
import React, { useState, useEffect } from 'react';


export default function ListaAgendamentos() {
  const [agendamentos, setAgendamentos] = useState([]);

  useEffect(() => {
    setAgendamentos([
      { id: 1, paciente: 'João Silva', data: '2024-11-03', status: 'Confirmado', rg: '123456789', tratamento: 'Limpeza', horario: '10:00' },
      { id: 2, paciente: 'Maria Oliveira', data: '2024-11-04', status: 'Pendente', rg: '987654321', tratamento: 'Obturação', horario: '11:30' }
    ]);
  }, []);

  return (
    <div className="admin-main">
      <h2>Agendamentos</h2>
      <div className="search-bar">
        <input type="text" placeholder="Nome ou RG do paciente" />
        <button>Buscar</button>
        <input type="text" placeholder="Data" />
        <button>Buscar</button>
        <button className="new-appointment-btn">+ Novo</button>
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
                <button className="edit-btn">Editar</button>
                <button className="view-btn">Ver Paciente</button>
                <button className="delete-btn">Apagar</button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}