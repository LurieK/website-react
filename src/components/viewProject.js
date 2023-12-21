import ProjectsObj from "./projectsObj"
import { useParams } from 'react-router-dom';




function ViewProject(){

let {id } =useParams()

//to add bold text within summaryies 
const renderText = (text) => {
        return text.split('**').map((part, index) => 
            index % 2 === 1 ? <strong key={index}>{part}</strong> : part
        );
    };

const project = ProjectsObj.find(project => project.key.toString() === id)

 if (!project) {
    return <div>Project not found</div>;
  }

  console.log(project)

  return (
    <div className='project-body'>
      <h1>{project.title}</h1>
      <h3>{project.stack.join(', ')}</h3>
      <div className='external-links'> 
          <h3><a href={project.link} target='_blank'>View Live</a></h3>
          <h3><a href={project.github} target='_blank'>View GitHub</a></h3>
      </div>
      <img className='main-image' src={project.mainImage} alt={project.title}/>
      <p>{renderText(project.summary1)}</p>
      <div className='img-para'>
          <img className={project.image2 === '' ? 'mobile-img' : 'img2'} 
          src={project.image2 === '' ? project.image_mobile : project.image2} alt=""/>
        
          <p>{renderText(project.summary2)}</p>
      </div>
      
      <p>{renderText(project.conclusion)}</p>
      <video className='video' src={project.video} controls/>
    </div>
  );

}

export default ViewProject