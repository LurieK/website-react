import  React, { useState, useEffect, useRef }  from 'react';
import projectsObj from './projectsObj';
import Project from './project';
import useVisibility from '../components/useVisable';

function ProjectsMobile(){

    //fade in on load
    const [isVisible, ref] = useVisibility();

    const sectionStyle = {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(100px)'
    };
    
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

        
        <div className='img-container'>
            {projectList}
        </div>
    
    )

}

export default ProjectsMobile