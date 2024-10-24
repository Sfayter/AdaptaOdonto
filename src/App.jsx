
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Routes>
          <Route path='' Component={LandingPage}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
