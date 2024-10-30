
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Routes>
          <Route path='' Component={LandingPage}/>
          <Route path='/admin/login' Component={Login}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
