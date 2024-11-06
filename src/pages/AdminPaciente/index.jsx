import './style.scss';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Erro from '../../components/Erro';
import FormPaciente from '../../components/FormPaciente';
import { NavLink } from 'react-router-dom';

export default function AdminPaciente() {
  const [pacientesAll, setPacientesAll] = useState([]);
  const [pacientes, setPacientes] = useState([]);
  const [erro, setErro] = useState('');
  const [formPaciente, setFormPaciente] = useState(false)
  const [altFormPaciente, setAltFormPaciente] = useState(false)
  const url = process.env.REACT_APP_API_URL+"/paciente"
  const token = localStorage.getItem('token')
  const [pacienteAlterado, setPacienteAlterado] = useState('')

  useEffect(() => {
    buscarPacientes()
  }, []);
  function abrirAlteracao(paciente){
    setAltFormPaciente(true)
    setPacienteAlterado(paciente)
  }
  async function buscarPacientes(){
    axios.get(url+"?x-access-token="+token)
    .then(res => {
      setPacientesAll(res.data)
      setPacientes(res.data)
    })
    .catch(err => setErro(err.response.data.erro))
  }
  async function excluirPaciente(id){
    axios.delete(url+"/"+id+"?x-access-token="+token)
    .then(res => {
      buscarPacientes()
    })
    .catch(err => setErro(err.response.data.erro))
  }
  return (
    <div className="admin-paciente">
       <NavLink to="/admin/main" className="btn-dashboard"><img className='img-retorno' src="/assets/images/seta-circulo-esquerda.png"/>Dashboard</NavLink>
      <div className='lista-paciente'>

        <h2>Pacientes</h2>
        <div className="search-bar">
          <input type="text" onChange={e => setPacientes(pacientesAll.filter(p => p.rg.includes(e.target.value)))} placeholder="Pesquisar por RG"/>

          <button className="new-patient-btn" onClick={() => setFormPaciente(true)}>+ Novo</button>
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
                  <button className="edit-btn" onClick={() => abrirAlteracao(paciente)}>Editar</button>
                  <button className="delete-btn" onClick={() => excluirPaciente(paciente.id)}>Apagar</button>
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
      {formPaciente && <FormPaciente alterar={false} cancel={() => setFormPaciente(false)} close={() => {
        setFormPaciente(false)
        buscarPacientes()
      }}/>}
      {altFormPaciente && <FormPaciente alterar={true} paciente={pacienteAlterado} cancel={() => setAltFormPaciente(false)} close={() => {
        setAltFormPaciente(false)
        buscarPacientes()
      }}/>}
    </div>
  );
}

