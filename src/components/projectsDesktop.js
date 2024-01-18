import  React, { useState, useEffect, useRef }  from 'react';
import projectsObj from './projectsObj';
import Project from './project';
import useVisibility from '../components/useVisable';

function ProjectDesktop (){

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
        <div 
            className="img-container"
            ref= {containerRef}
            onMouseOver={()=> handleHover(false)}
            onMouseOut={()=> handleHover(true)}
        >
            {projectList}
            {projectList}
        </div>
    
    )




}
export default ProjectDesktop;