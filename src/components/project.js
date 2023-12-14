

function Project ({ stack, link, title, image }){
console.log(stack)

const displayStack = stack.map((item, index)=>{
    
    return (
        <span key= {index} >
            <p> {item} </p>
            {index < stack.length -1 && <p>|</p>}
        </span>
        )
    

})

return (
    <div className='project'>
        <img className= 'project-img' src={image}/>
        <div className= 'projects-right'>
            <h3>{title}</h3>
            <button><a href={link}>VIEW</a></button>
            <span className='stack'>{displayStack}</span>
            
            
        </div>
    
    </div>


    )
}
export default Project