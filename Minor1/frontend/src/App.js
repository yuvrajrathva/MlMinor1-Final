import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Customer from './components/Customer';
import Retailer from './components/Retailer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/retailer" element={<Retailer />} />
      </Routes>
    </Router>
  );
}

export default App;
