

function Project (props){



return (
    <div className='project'>
        <img className= 'project-img' src={props.image}/>
        <div className= 'projects-right'>
            <h3>{props.title}</h3>
            <button><a href={props.link}>VIEW</a></button>
        </div>
    
    </div>


    )
}
export default Project