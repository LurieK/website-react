import headshot from'../images/IMG_1364.JPG';
import react from '../images/stack_imgs/1.png';
import javascript from '../images/stack_imgs/2.png';
import node from '../images/stack_imgs/4.png';
import git from '../images/stack_imgs/3.png';
import figma from '../images/stack_imgs/icons8-figma-50.png';
import css from '../images/stack_imgs/6.png';
import html from '../images/stack_imgs/7.png';

import  React  from 'react';

const Hero = React.forwardRef(({ style }, ref) =>{


return (
    <div ref={ref} style={style} className="opening">
        
        <div className="opening-text">
            <p className="phone-opening">Front End Developer</p>

            <h1>Lurie </h1> 
            <h1>Kimmerle</h1>
            {/* <!-- for responsive layout --> */}
            <div className="responsive-opening">
                <div className="res-img-container">
                    <img alt="Image of Lurie"className='res-opening-img' src={headshot}/>
                </div>
            
            </div>
            <div className="subtitle">
                <p className="desktop-opening">Front End Developer</p>
               
                <p className="email"><a href="mailto:LuraineKimmerle@gmail.com?subject=Website%20Inquiry">Get in Touch</a>
                </p>
            </div>
            <ul className="opening-icons">
        
                <li><img src={react}/>
                </li>
                <li><img src={javascript}/>
                </li>
                <li><img src={node}/>
                </li>
                <li><img src={git}/>
                </li>
                <li><img src={figma}/>
                </li>
                <li><img src={css}/>
                </li>
                <li><img src={html}/>
                </li>
            </ul>
        </div>
        <div class="img-container">
            <img alt="image of Lurie" className='opening-img' src={headshot}/>
        </div>

        

    </div>

    
)
})
export default Hero