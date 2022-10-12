import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "./FacebookPages/Home";
import Video from "./FacebookPages/Video";
import MarketPlace from "./FacebookPages/MarketPlace";
import Groups from "./FacebookPages/Groups";
import Gaming from "./FacebookPages/Gaming";
import Profile from "./FacebookPages/Profile";
import Notification from "./FacebookPages/Notification";
import Messenger from "./FacebookPages/Messenger";
import './App.css';

function App() {
  return (
    <div>
    <Router>
      <nav className="Navigation">
      <div className="search">
        <img src="./pics/Facebook_logo.png" id="facebooklogo" alt="no"/>
        <input type="text" placeholder="Search Facebook" id="peoplesearch"/>
      </div>
      <div className="links">
      <Link to="/"><a class="active" href="#"><i class="fa fa-fw fa-home"></i></a></Link>
      <Link to="/Video">  <a class="active" href="#"><i class="fa fa-fw fa-video"></i></a></Link>
      <Link to="/MarketPlace"><a class="active" href="#"><i class="fa fa-fw fa-store"></i> </a></Link>
      <Link to="/Groups"><a class="active" href="#"><i class="fa fa-fw fa-users"></i></a></Link>
      <Link to="/Gaming"><a class="active" href="#"><i class="fa fa-fw fa-gamepad"></i></a></Link>
      <Link to="/profile"><a class="active" href="#"><i class="fa fa-fw fa-user"></i></a></Link>
      </div>
      <div>
        <Link to="/Notification"><a class="notify" href="#"><i class="fa fa-fw fa-bell"></i></a></Link>
        <Link to="/Messenger"><a class="notify" href="#"><i class="fa fa-fw fa-comment"></i></a></Link>
      </div>
      </nav>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/Video" element={<Video />} />
        <Route path="/MarketPlace" element={<MarketPlace />} />
        <Route path="/Groups" element={<Groups />} />
        <Route path="/Gaming" element={<Gaming />} />
        <Route path="/Profile" element={<Profile />} /> 
        <Route path="/Notification" element={<Notification />} />
        <Route path="/Messenger" element={<Messenger />} />
      </Routes>
      <div className="foot">
      <footer> <h3>Copyright &copy;  2022, Reserved</h3> </footer>
      </div>
    </Router>
    </div>
  );

}

export default App;
