import './App.css'
import Login from './LoginForCEO/Login';
import Home from './Dashboard/Home';
import MainDash from './Dashboard/MainDash/MainDash';
import RightSide from './Dashboard/RightSide/RightSide';
import Sidebar from './Dashboard/Sidebar/Sidebar';
import Protected from './Dashboard/Protected';

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Login />
        <Home />
        <Sidebar/>
        <MainDash/>
        <RightSide/>
      </div>
    </div>
  );
}

export default App;
