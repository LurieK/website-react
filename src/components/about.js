import headshot2 from '../images/IMG_5582_Original 3.jpg'

import  React  from 'react';
import useVisibility from '../components/useVisable';

function About (){
    
    const [isVisible, ref] = useVisibility();

    const sectionStyle = {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(100px)'
    };



return (

 <div ref={ref} style={sectionStyle} className="about" id="about">
        <img alt="image of Lurie" src={headshot2}/>
        <div className="about-txt">
            <h2> 👋🏻 It's great to meet you!</h2>
            <p>
                I am a Software Developer skilled in React, JavaScript, and CSS, as well as WordPress and Shopify. My love for tech is fueled by curiosity and a commitment to simplify people's lives. 
                <br/><br/>
                I have an eclectic background in entrepreneurship, storytelling, and education. Which has given me  a unique approach to frontend and UX/UI projects, along with a strong ownership mentality. In addition, my four-year journey in remote work has taught me a lot about collaborating effectively with international teams and managing tight deadlines.
                <br/><br/>
                I'm thrilled to bring my energy and creative insights to a team working remotely on transformative products. Welcome to my site, and please don't hesitate to get in touch – I always enjoy connecting with fellow tech nerds!
                </p>
            </div>
        
    
</div>


)

}

export default About