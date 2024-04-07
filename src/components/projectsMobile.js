import  React, {  useRef }  from 'react';
import projectsObj from './projectsObj';
import Project from './project';
import { CiCircleChevUp, CiCircleChevDown } from "react-icons/ci";


function ProjectsMobile(){
    const containerRef = useRef(null);
    

    const scrollUp = ()=> {
        if(containerRef.current){
            containerRef.current.scrollTop -=660;
        }
    }

     const scrollDown =()=> {
        if(containerRef.current){
            containerRef.current.scrollTop +=660;
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
    return(

        <div className='projects-mobile'>
            <CiCircleChevUp className='scroll-button' onClick={scrollUp}/>

            <div className='img-container' ref={containerRef}>
                {projectList}
            </div>

            <CiCircleChevDown className='scroll-button' onClick={scrollDown}/>
        </div>
    
    )

}

export default ProjectsMobile