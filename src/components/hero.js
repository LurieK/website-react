import headshot from'../images/IMG_1364.JPG';
import ProjectDesktop from './projectsDesktop';
import  React, { useState, useEffect, useRef }  from 'react';
import useVisibility from '../components/useVisable';
import { FaReact, FaNodeJs, FaGitAlt, FaFigma, FaCss3Alt, FaHtml5 } from 'react-icons/fa';
import { RiJavascriptLine } from "react-icons/ri";
import resume from '../documents/Lurie_Kimmerle.pdf';
import { useMediaQuery } from '@mui/material';


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
        
        <ProjectDesktop/>

        

    </div>

    
    )
}
export default Hero