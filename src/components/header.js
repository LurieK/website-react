import linkedin3 from '../images/linkedin3.png';
import github from '../images/github-mark-white.png';

function Header (){

return(
    <header>
        <ul class="header-links">
            <li>
                <a href="https://github.com/LurieK" target="_blank">
                    <img alt="github" src={github}/>
                    <p>GitHub</p>
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/luriekimmerle/" target="_blank">
                    <img alt='LinkedIn' src={linkedin3}/>
                    <p>LinkedIn</p>
                </a>
            </li>

        </ul>
        <ul class="menu">
            <li>
                <a href="#portfolio">
                    <p>Projects</p>
                </a>
            </li>
            <li>
                <a href="./blogs/blog.html">
                    <p>Blog</p>
                </a>
            </li>
            <li>
                <a href="#about">
                    <p>About</p>
                </a>
            </li>
            <li>
                <a href="#contact">
                    <p>Contact</p>
                </a>
            </li>
        </ul>
    </header>
)

}
export default Header