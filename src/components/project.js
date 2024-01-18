import { Link } from 'react-router-dom';



function Project ({ stack, title, image, onHoverPause, client, id }){



return (
    <div  
        className='project'
        >
   
        <img 
            loading="lazy" 
            className= 'project-img' 
            src={image}/>
     
        <div className= 'projects-right'>
            <h3>{title}{client && ' (Client Project)'}</h3>
            <Link to={`/project/${id}`}>VIEW</Link> 
            <span className='stack'>{stack.join(' | ')}</span>
        </div>
    
    </div>


    )
}
export default Project