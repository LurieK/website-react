import ProjectsObj from "./projectsObj"
import { useParams } from 'react-router-dom';




function ViewProject(){

let {id } =useParams()

//to add bold text within summaries 
const renderText = (text) => {
    // Split for bold formatting
    const parts = text.split('**');
    
    return parts.map((part, index) => {
      // look for odd index to make bold (the first index is alway not bold)
      if (index % 2 === 1) {
        return <strong key={index}>{part}</strong>;
      }
      
      // Check and replace links in non-bold parts
      const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/;
      const linkMatch = part.match(linkRegex);

      if (linkMatch) {
        const preText = part.substring(0, part.indexOf(linkMatch[0]));
        const postText = part.substring(part.indexOf(linkMatch[0]) + linkMatch[0].length);
        return (
          <span key={index}>
            {preText}
            <a href={linkMatch[2]} target="_blank" rel="noopener noreferrer" className='text-link'>{linkMatch[1]}</a>
            {postText}
          </span>
        );
      }

      // Return part as is if no link is found
      return part;
    });
  };

const project = ProjectsObj.find(project => project.key.toString() === id)

 if (!project) {
    return <div>Project not found</div>;
  }

  console.log(project)

  return (
    <div className='project-body'>
      <h1>{project.title}</h1>
      <h3>{project.stack.join(' | ')}</h3>
      {!project.client ? 
        <div className='external-links'> 
          <h3><a href={project.liveLink} target='_blank'>View Live</a></h3>
          <h3><a href={project.github} target='_blank'>View GitHub</a></h3>
      </div> : ''}
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