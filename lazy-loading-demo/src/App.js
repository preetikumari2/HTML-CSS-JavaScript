import React,{Suspense, lazy} from 'react';
import Home from './components/Home'
import './App.css';
//const Home = lazy(() => import('./components/Home'))
//const About = lazy(() => import('./components/About'))

function App() {
  return (
    <div>
      <Home />
      {/* <h1>Lazy loading</h1>
      <Suspense fallback={<div>Please wait...Home is loading</div>} >
      <Home />
      </Suspense>
      <Suspense fallback={<div>Please wait... About is loading</div>} >
      <About />
      </Suspense> */}
    </div>
  );
}

export default App;
