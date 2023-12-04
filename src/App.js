import logo from './logo.svg';
import './App.css';
// import About from './components/about';
// import Client from './components/client';
import Header from './components/header';
import Hero from './components/hero';
// import Projects from './components/projects';
// import Footer from './components/footer';

import {useState, useEffect, useRef} from 'react';




function App() {
    

    
    const secRef = useRef(null);
    
    const [sectionVisable, setSectionVisable] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (entry.target === secRef.current) {
                            setSectionVisable(true);
                        }
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (secRef.current) {
            observer.observe(secRef.current);
        }

        return () => {
            if (secRef.current) {
                observer.unobserve(secRef.current);
            }
        };
    }, []);

  const sectionStyle = isVisible => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(100px)'
});


  return (
    <div className="App">
      <Header />
      <Hero ref={secRef} style={sectionStyle(sectionVisable)} />
      {/* <About/>
      <Client/>
      <Projects/>
      <Footer/> */}
    </div>
  );
}

export default App;
