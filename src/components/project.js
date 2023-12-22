import { Link } from 'react-router-dom';


function Project ({ stack, title, image, onHoverPause, client, id }){


const displayStack = stack.map((item, index)=>{
    
    return (
        <span key= {index} >
            <p> {item} {index < stack.length -1 && '|'}</p>
            
        </span>
        )
    

})

return (
    <div  
        className='project'
        onMouseEnter={()=> onHoverPause(false)}
        onMouseOut={()=> onHoverPause(true)}>
        <div className='projects-left'>
        <img 
            className= 'project-img' 
            src={image}/>
        
        </div>
        <div className= 'projects-right' 
        onMouseEnter={()=> onHoverPause(false)}
        onMouseOut={()=> onHoverPause(true)}>
            <h3>{title}{client && ' (Client Project)'}</h3>
            <Link to={`/project/${id}`}>VIEW</Link> 
            <span className='stack'>{displayStack}</span>
        </div>
    
    </div>


    )
}
export default Project