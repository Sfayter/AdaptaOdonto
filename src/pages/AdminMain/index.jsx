import './style.scss';
import React, { useState, useEffect } from 'react';

function AdminMain() {
    const [agendamentos, setAgendamentos] = useState([]);
  
    useEffect(() => {
      setAgendamentos([
        { id: 1, paciente: 'João Silva', data: '2024-11-03', status: 'Confirmado', rg: '123456789', tratamento: 'Limpeza', horario: '10:00'},
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
          <button className="new-appointment-btn">Novo</button>
        </div>

          <div className="appointments-container">
          <table className="appointments-table">
            <thead>
              <tr>
                <th>Paciente</th>
                <th>Data da consulta</th>
                <th>Status</th>
                <th>RG</th>
                <th>Tratamento</th>
                <th>Horário</th>
              </tr>
            </thead>
            <tbody>
              {agendamentos.map((agendamento) => (
                <tr key={agendamento.id}>
                  <td>{agendamento.paciente}</td>
                  <td>{agendamento.data}</td>
                  <td>{agendamento.status}</td>
                  <td>{agendamento.rg}</td>
                  <td>{agendamento.tratamento}</td>
                  <td>{agendamento.horario}</td>
                  <td>
                    <button className="edit-btn">Editar</button>
                    <button className="view-btn">Ver paciente</button>
                    <button className="delete-btn">Excluir</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  
  export default AdminMain;
