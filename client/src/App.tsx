import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupPage from './Pages/SignupPage';
import LoginPage from './Pages/LoginPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
