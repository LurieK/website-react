

function Project (props){



return (
    <div>
        <img src={props.image}/>

        <h3>{props.title}</h3>

        <button><a href={props.url}></a></button>
    
    
    </div>


    )
}
export default Project