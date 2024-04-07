import linkedin_white from '../images/linkedin3.png';
import github_white from '../images/github-mark-white.png';
import email from '../images/email.png'

const Footer=()=>{



return(
    <div className="contact" id="contact">

        <h2>STAY IN TOUCH</h2>
        <ul className="links">
            <li>
                <a href="https://github.com/LurieK" rel="noopener noreferrer" target="_blank">
                    <img alt="github"src={github_white}/>
                    <p>GitHub</p>
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/lurie-kimmerle/" rel="noopener noreferrer" target="_blank">
                    <img alt="linkedin" src={linkedin_white}/>
                    <p>LinkedIn</p>
                </a>
            </li>
            <li><a href="mailto:LuraineKimmerle@gmail.com?subject=Website%20Inquiry" target="">
                <img alt="email" src={email}/>
                    
                    <p>Email</p>
                </a>
            </li>
        </ul>
        <p className='credit'>This site was built and designed by Lurie Kimmerle - <a href='https://github.com/LurieK/website-react.git' rel="noopener noreferrer" target="_blank" alt='link to sites repository'>Click here to view the repository on Github</a></p>
    </div>

    

)

}

export default Footer