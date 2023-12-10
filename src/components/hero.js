import headshot from'../images/IMG_1364.JPG';
import projectsObj from './projectsObj';
import Project from './project';
import  React  from 'react';
import useVisibility from '../components/useVisable';
import { FaReact, FaNodeJs, FaGitAlt, FaFigma, FaCss3Alt, FaHtml5 } from 'react-icons/fa';
import { RiJavascriptLine } from "react-icons/ri";

function Hero(){
    
    const [isVisible, ref] = useVisibility();

    const sectionStyle = {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(100px)'
    };

    const projectList = projectsObj.map(project=> 
        <Project 
            key={project.key}
            title={project.title}
            image={project.image}
            link={project.url}
            summary = {project.summary} />
        
    )

    console.log(projectsObj)

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
        <div class="img-container">
            {projectList}
        </div>

        

    </div>

    
    )
}
export default Hero