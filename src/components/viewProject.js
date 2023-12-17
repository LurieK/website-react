import ProjectsObj from "./projectsObj"
import Header from "./header"
import Footer from "./footer"



function ViewProject(){

const projectPage = ProjectsObj.map((project)=>{
    return (
        <div>
            <h1>{project.title}</h1>
            <h3>{project.stack}</h3>
            <div> 
                <h3>{project.link}</h3>
                <h3>{project.github}</h3>
            </div>
           
            <img src={project.mainImage}/>
            <p>{project.summary}</p>
            <div>
                <img src={project.image1}/>
                <img src={project.image2}/>
            </div>
            <video src={project.video}/>
            
        </div>
    )

})

return (
    <div>
        <Header/>
        {projectPage}
        <Footer/>
    </div>
    )
    


}

export default ViewProject