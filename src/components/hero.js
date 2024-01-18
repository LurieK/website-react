import headshot from'../images/IMG_1364.JPG';
import projectsObj from './projectsObj';
import Project from './project';
import  React, { useState, useEffect, useRef }  from 'react';
import useVisibility from '../components/useVisable';
import { FaReact, FaNodeJs, FaGitAlt, FaFigma, FaCss3Alt, FaHtml5 } from 'react-icons/fa';
import { RiJavascriptLine } from "react-icons/ri";
import resume from '../documents/Lurie_Kimmerle.pdf';

function Hero(){
    //State for hoving and ref for the project container
    const [notHovering, setNotHovering] = useState(true);
    const containerRef= useRef(null);

    //fade in on load
    const [isVisible, ref] = useVisibility();

    const sectionStyle = {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(100px)'
    };

    useEffect(() => {
      let requestId;
        //define scroll animation as scroll
      const scroll = () => {
        if (notHovering && containerRef.current) {//if not hovering 
          containerRef.current.scrollTop += 1; //start scroll
          requestId = requestAnimationFrame(scroll);//run scroll continuosly
        }
      };
    //run scroll if not hovering
      if (notHovering) {
        requestId = requestAnimationFrame(scroll);
      }
    //cleanup function
      return () => {
        cancelAnimationFrame(requestId);
      };
    }, [notHovering]);


    

    //stop the scroll or start depending on hover
    //values are passed in project.js
    const handleHover = (value) => {
    setNotHovering(value);
    if(containerRef.current) {
        if(value) {
            containerRef.current.classList.remove('paused');
        } else {
            containerRef.current.classList.add('paused');
        }
    }
}

    const projectList = projectsObj.map(project=> 
        <Project 
            key={project.key}
            id={project.key}
            title={project.title}
            image={project.mainImage}
            link={project.url}
            stack={project.stack}
            client = {project.client}
             />
        
    )



return (
    <div ref={ref} style={sectionStyle} className="opening">
        
        <div className="opening-text">


            <h1>Lurie </h1> 
            <h1>Kimmerle</h1>
            
            <div className="subtitle">
        
                <p className="email"><a href={resume} target='_blank'>Resume</a></p>
                <p className="email"><a href="mailto:LuraineKimmerle@gmail.com?subject=Website%20Inquiry">Get in Touch</a>
                </p>
            </div>
            <ul className="opening-icons">
        
                <li><FaReact />
                </li>
                <li><RiJavascriptLine />
                </li>
                <li><FaNodeJs />
                </li>
                <li><FaGitAlt />
                </li>
                <li><FaFigma />
                </li>
                <li><FaCss3Alt />
                </li>
                <li><FaHtml5 />
                </li>
            </ul>
        </div>
        <div 
            className="img-container"
            ref= {containerRef}
            onMouseOver={()=> handleHover(false)}
            onMouseOut={()=> handleHover(true)}
        >
            {projectList}
            {projectList}
        </div>

        

    </div>

    
    )
}
export default Hero