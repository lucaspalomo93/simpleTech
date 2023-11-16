import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import SimpleTechProvider from './context/context';
import Home from './pages/home';
import RenderImages from './components/renderImages/renderImages';

function App() {
  return (
    <SimpleTechProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/catalogo' element={<RenderImages />} />
          <Route
            path='*'
            element={<Navigate to="/" replace />} 
          />
        </Routes>
      </BrowserRouter>
    </SimpleTechProvider>
  );
}

export default App;
