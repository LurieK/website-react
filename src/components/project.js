import { Link } from 'react-router-dom';



function Project ({ stack, title, image, client, id }){



return (
    <div  
        className='project'
        
        >
   
        <img 
            loading="lazy" 
            className= {id === 5? 'mobile-proj-image':'project-img'} 
            src={image}
            alt={`${title}`}/>
     
        <div className= 'projects-right'>
            <h3>{title}{client && ' (Client Project)'}</h3>
            <Link to={`/project/${id}`}>VIEW</Link> 
            <span className='stack'>{stack.join(' | ')}</span>
        </div>
    
    </div>


    )
}
export default Project