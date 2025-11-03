import './App.css'
import { Routes, Route } from 'react-router-dom';
import { CanvasContainer } from './pages';
import { LandingPage } from './pages'


function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/board/:roomId" element={<CanvasContainer/>} />
    </Routes>
  );
}

export default App
