import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppMain from './components/AppMain/AppMain';
import MatrixRain from './components/MatrixRain/MatrixRain';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<MatrixRain />} />
          <Route path="/AppMain" element={<AppMain />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;