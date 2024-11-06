import './style.scss'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Sidebar = () => {
    return (
      <div className="sidebar">
        <h2>Adapta Odonto</h2>
        <ul>
          <li>Dashboard</li>
        </ul>
      </div>
    );
  };  
  const Dashboard = () => {
    return (
      <div className="dashboard">
        <div className="section">
          <h2>Agendamentos</h2>
          <div className="placeholder">Colocar aqui o Agendamento</div>
        </div>
        <div className="section">
          <h2>Pacientes</h2>
          <div className="placeholder">Colocar aqui o Paciente</div>
        </div>
      </div>
    );
  };
  
  const DashboardLayout = () => {
    return (
      <div className="dashboard-layout">
        <Sidebar />
        <div className="main-content">
          <Dashboard />
        </div>
      </div>
    );
  };
  
  export default DashboardLayout;