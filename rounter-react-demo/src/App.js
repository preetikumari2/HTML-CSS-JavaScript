import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import ElectronicsPage from './Pages/ElectronicsPage';
import BakeryPage from "./Pages/BakeryPage";
import ClothingsPage from "./Pages/ClothingsPage";
import Profile from "./Pages/Profile";
import Home from "./Pages/Home";
import PageNotFound from "./Pages/PageNotFound";
import './App.css';

function App() {
  //to create routes
  // return (
  //   <Router>
  //     <Routes>
  //       <Route path="/" element={<Home />} />
  //       <Route path="/ElectronicsPage" element={<ElectronicsPage />} />
  //       <Route path="/BakeryPage" element={<BakeryPage />} />
  //       <Route path="/ClothingsPage" element={<ClothingsPage />} />
  //       <Route path="/Profile" element={<Profile />} />
  //       <Route path="*" element={<PageNotFound />} />
  //     </Routes> 
  //   </Router>
  // );

  //for creating Navigation
  // return(
  //   <Router>
  //     <nav>
  //       <Link to="/">Home</Link>
  //       <Link to="/ElectronicsPage">ElectronicsPage</Link>
  //       <Link to="/BakeryPage">BakeryPage</Link>
  //       <Link to="/ClothingsPage">ClothingsPage</Link>
  //       <Link to="/Profile">Profile</Link>
  //     </nav>

  //     <Routes>
  //       <Route path="/" element={<Home />} />
  //       <Route path="/ElectronicsPage" element={<ElectronicsPage />} />
  //       <Route path="/BakeryPage" element={<BakeryPage />} />
  //       <Route path="/ClothingsPage" element={<ClothingsPage />} />
  //       <Route path="/Profile" element={<Profile />} />
  //       <Route path="*" element={<PageNotFound />} />
  //     </Routes>
  //     <div>Footer</div>
  //   </Router>
  // );

  //clicking the button amd navigating to other component
  return(
    <div>
    <Router>
      <nav className="Navigation">
      <Link to="/">Home</Link>
        <Link to="/ElectronicsPage">ElectronicsPage</Link>
        <Link to="/BakeryPage">BakeryPage</Link>
        <Link to="/ClothingsPage">ClothingsPage</Link>
        <Link to="/Profile">Profile</Link>
      </nav>
      <Routes className="MainPage">
      <Route path="/" element={<Home />} />
        <Route path="/ElectronicsPage" element={<ElectronicsPage />} />
        <Route path="/BakeryPage" element={<BakeryPage />} />
        <Route path="/ClothingsPage" element={<ClothingsPage />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Profile/:username/:age" element={<Profile/>} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <div className="foot">Footer</div>
    </Router>
    </div>
  );
  
}

export default App;
