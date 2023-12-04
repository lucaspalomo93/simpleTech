import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import SimpleTechProvider from './context/context';
import Presentation from './pages/presentation/presentation';
import Catalogue from './pages/home/catalogue';
import Landing from './pages/landing/landing';

function App() {
  return (
    <SimpleTechProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/presentation' element={<Presentation />} />
          <Route path='/catalogo' element={<Catalogue />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </BrowserRouter>
    </SimpleTechProvider>
  );
}

export default App;
