

function Project (props){



return (
    <div className='project'>
        <img className= 'project-img' src={props.image}/>

        <h3>{props.title}</h3>

        <button><a href={props.link}></a></button>
    
    
    </div>


    )
}
export default Project