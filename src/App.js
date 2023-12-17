
import './App.css';
import About from './components/about';
import Header from './components/header';
import Hero from './components/hero';
import Footer from './components/footer';
import Review from './components/review';
import ViewProject from './components/viewProject';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
   


  return (
  <Router>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={
            <>
              <Hero />
              <Review />
              <About />
            </>
          } />
          <Route path="/project/:id" element={<ViewProject />} />
        </Routes>
      <Footer/> 
    </div>
  </Router>
  );
}

export default App; 
