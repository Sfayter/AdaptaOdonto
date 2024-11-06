import './style.scss';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Erro from '../../components/Erro';

export default function AdminPaciente() {
  const [pacientesAll, setPacientesAll] = useState([]);
  const [pacientes, setPacientes] = useState([]);
  const [erro, setErro] = useState('')
    const url = process.env.REACT_APP_API_URL+"/paciente"
    const token = localStorage.getItem('token')
  useEffect(() => {
    buscarPacientes()
  }, []);
  
  async function buscarPacientes(){
    axios.get(url+"?x-access-token="+token)
    .then(res => {
      setPacientesAll(res.data)
      setPacientes(res.data)
    })
    .catch(err => setErro(err.response.data.erro))
  }
  return (
    <div className="admin-paciente">
      <div className='lista-paciente'>

        <h2>Pacientes</h2>
        <div className="search-bar">
          <input type="text" onChange={e => setPacientes(pacientesAll.filter(p => p.rg.includes(e.target.value)))} placeholder="Pesquisar por RG"/>

          <button className="new-patient-btn">+ Novo</button>
        </div>

        <div className="patients-container">
          <div className="cards-container">
            {pacientes.map((paciente) => (
              <div key={paciente.id} className="card">
                <div className="card-left">
                  <div>
                    <strong>Paciente:</strong> {paciente.nome}
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
      {erro.length > 0?
                <Erro close={() => setErro('')} mensagem={erro}/>
                :''
        }
    </div>
  );
}

