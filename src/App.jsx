
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import PageAdmin from './pages/PageAdmin';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Routes>
          <Route path='' Component={PageAdmin}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
