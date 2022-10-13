import React,{Suspense, lazy} from 'react';
//import Home from './components/Home'
import './App.css';
const Home = lazy(() => import('./components/Home'))
const About = lazy(() => import('./components/About'))

function App() {
  return (
    <div>
      <Suspense fallback={<div>Please wait... loading</div>} >
      <Home />
     
      </Suspense>
      <Suspense fallback={<div>Please wait... About is loading</div>} >
      <About />
      </Suspense> 
    </div>
  );
}

export default App;
