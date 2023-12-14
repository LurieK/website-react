import headshot from'../images/IMG_1364.JPG';
import projectsObj from './projectsObj';
import Project from './project';
import  React, { useState, useEffect, useRef }  from 'react';
import useVisibility from '../components/useVisable';
import { FaReact, FaNodeJs, FaGitAlt, FaFigma, FaCss3Alt, FaHtml5 } from 'react-icons/fa';
import { RiJavascriptLine } from "react-icons/ri";

function Hero(){
    const [isHovering, setIsHovering] = useState(true);
    console.log(isHovering)
    const containerRef= useRef(null);

    const [isVisible, ref] = useVisibility();

    const sectionStyle = {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(100px)'
    };

    useEffect(()=>{
        let intervalId;

        if(isHovering){
            const step = 3;
            intervalId= setInterval(()=> {
                if (containerRef.current){
                    containerRef.current.scrollTop += step
                }
            }, 50)
        }
        return ()=>{
            if(intervalId){
                clearInterval(intervalId)
            }
        }
    
    },[isHovering])

    const handleHover= (value)=>{
        setIsHovering(value)
    }

    const projectList = projectsObj.map(project=> 
        <Project 
            key={project.key}
            title={project.title}
            image={project.image}
            link={project.url}
            stack={project.stack}
            client = {project.client}
            onHoverPause = {handleHover} />
        
    )



return (
    <div ref={ref} style={sectionStyle} className="opening">
        
        <div className="opening-text">
            <p className="phone-opening">Front End Developer</p>

            <h1>Lurie </h1> 
            <h1>Kimmerle</h1>
            {/* <!-- for responsive layout --> */}
            <div className="responsive-opening">
                <div className="res-img-container">
                    {projectList}
                </div>
            
            </div>
            <div className="subtitle">
                <p className="desktop-opening">Front End Developer</p>
               
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
        >
            {projectList}
        </div>

        

    </div>

    
    )
}
export default Hero