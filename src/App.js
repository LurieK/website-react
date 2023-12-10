import logo from './logo.svg';
import './App.css';
import About from './components/about';
// import Client from './components/client';
import Header from './components/header';
import Hero from './components/hero';
import Project from './components/projectsObj';
import Footer from './components/footer';

function App() {
   


  return (
    <div className="App">
      <Header />
      <Hero />
      <About/>
      {/* <Client/>*/}
      <Footer/> 
    </div>
  );
}

export default App;
