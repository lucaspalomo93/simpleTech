import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import SimpleTechProvider from './context/context';
import Presentation from './pages/presentation/presentation';
import Home from './pages/home/home';

function App() {
  return (
    <SimpleTechProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Presentation />} />
          <Route path='/catalogo' element={<Home />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </BrowserRouter>
    </SimpleTechProvider>
  );
}

export default App;
