
import './App.scss';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Agendamento from './pages/Agendamento'
import AdminMain from './pages/AdminMain';
import ListaAgendamentos from './pages/ListaAgendamentos';
import AdminPaciente from './pages/AdminPaciente';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='' Component={LandingPage}/>
          <Route path='/admin' Component={AdminMain}>
          <Route path='/admin/login' Component={Login}/>
          <Route path='/admin/agendamento' Component={ListaAgendamentos}/>
          <Route path='/admin/agendamento/novo' Component={Agendamento}/>
          <Route path='/admin/paciente' Component={AdminPaciente}/>
        <Route
              path="/admin"
              element={<Navigate to="/admin/login" replace={true} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
