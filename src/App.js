import logo from './logo.svg';
import './App.css';
import About from './components/about';
import Header from './components/header';
import Hero from './components/hero';
import Footer from './components/footer';
import Review from './components/review';

function App() {
   


  return (
    <div className="App">
      <Header />
      <Hero />
      <Review/>
      <About/>
      <Footer/> 
    </div>
  );
}

export default App; 
