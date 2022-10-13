import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import { Login } from './components/Login';
import './App.css';
import Protected from './components/Protected';
import  Profile  from './components/Profile';


function App() {
  return (
    <Router>
      <nav>
        <Link to="/" >Home</Link>
        <Link to="/AboutUs">About us</Link>
        <Link to="/Login">Login</Link>
        <Link to="Profile">Profile</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Protected Component = {Home} />}/>
        <Route path="/AboutUs" element={<Protected Component = {AboutUs} />}/>
        <Route path="/Login" element={<Login />}/>
        <Route path="/Profile" element={<Protected Component = {Profile}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
