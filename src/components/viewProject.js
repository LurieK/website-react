import ProjectsObj from "./projectsObj"
import { useParams } from 'react-router-dom';




function ViewProject(){

let {id } =useParams()

const project = ProjectsObj.find(project => project.key.toString() === id)

 if (!project) {
    return <div>Project not found</div>;
  }

  console.log(project)

  return (
    <div className='Project-body'>
      <h1>{project.title}</h1>
      <h3>{project.stack.join(', ')}</h3> {/* Assuming stack is an array */}
      <div> 
          <h3>{project.link}</h3>
          <h3>{project.github}</h3>
      </div>
      <img src={project.mainImage} alt={project.title}/>
      <p>{project.summary}</p>
      <div>
          <img src={project.image1} alt=""/>
          <img src={project.image2} alt=""/>
      </div>
      <video src={project.video} controls/>
    </div>
  );

}

export default ViewProject