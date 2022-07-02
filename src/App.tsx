import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components';

import { Home, Login } from './pages';

import './App.css';

function App() {
  return (
    <BrowserRouter>
        <Navbar />        
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login text="Hello world!" />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;