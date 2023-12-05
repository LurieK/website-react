import linkedin_white from '../images/linkedin3.png';
import github_white from '../images/github-mark-white.png';
import email from '../images/email.png'

const Footer=()=>{



return(
    <div className="contact" id="contact">

        <h2>STAY IN TOUCH</h2>
        <ul className="links">
            <li>
                <a href="https://github.com/LurieK" target="_blank">
                    <img alt="github"src={github_white}/>
                    <p>GitHub</p>
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/luriekimmerle/" target="_blank">
                    <img alt="linkedin" src={linkedin_white}/>
                    <p>LinkedIn</p>
                </a>
            </li>
            <li><a href="mailto:LuraineKimmerle@gmail.com?subject=Website%20Inquiry" target="_blank">
                <img alt="email" src={email}/>
                    
                    <p>Email</p>
                </a>
            </li>
        </ul>
    </div>

    

)

}

export default Footer