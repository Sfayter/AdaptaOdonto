import './style.scss';
import React, { useState, useEffect } from 'react';

export default function AdminPaciente() {
  const [pacientes, setPacientes] = useState([]);

  useEffect(() => {
    setPacientes([
      { id: 1, paciente: 'Charlie Xavier', telefone: '(11) 97584-4567', rg: '6325878403' },
      { id: 2, paciente: 'João da Silva', telefone: '(11) 91234-5678', rg: '123456789' }
    ]);
  }, []);

  return (
    <div className="admin-paciente">
      <h2>Pacientes</h2>
      <div className="search-bar">
        <input type="text" placeholder="Pesquisar paciente" />
        <button className="search-btn"><img alt='buscar2' src='/assets/images/lupa 1.svg' className='lupa'></img></button>
        <button className="new-patient-btn">+ Novo</button>
      </div>

      <div className="patients-container">
        <div className="cards-container">
          {pacientes.map((paciente) => (
            <div key={paciente.id} className="card">
              <div className="card-left">
                <div>
                  <strong>Paciente:</strong> {paciente.paciente}
                </div>
                <div>
                  <strong>Telefone:</strong> {paciente.telefone}
                </div>
                <div>
                  <strong>RG:</strong> {paciente.rg}
                </div>
              </div>
              <div className="card-right">
                <button className="edit-btn">Editar</button>
                <button className="delete-btn">Apagar</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

