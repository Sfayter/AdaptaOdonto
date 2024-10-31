
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Agendamento from './pages/Agendamento'
import AdminMain from './pages/AdminMain';
import ListaAgendamentos from './pages/ListaAgendamentos';
function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Routes>
          <Route path='' Component={LandingPage}/>
          <Route path='/admin' Component={AdminMain}>
            <Route path='/admin/login' Component={Login}/>
            <Route path='/admin/agendamento' Component={ListaAgendamentos}/>
            <Route path='/admin/agendamento/novo' Component={Agendamento}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
