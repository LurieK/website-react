import reviews from './reviewObj';
import useVisibility from '../components/useVisable';
import React, {useState } from 'react';
import { CiCircleChevLeft,CiCircleChevRight } from "react-icons/ci";



function Review (){
  const [isVisible, ref] = useVisibility();
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0)
  const [animation, setAnimation] = useState('fadeInLeft');

    const sectionStyle = {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(100px)'
    };

const changeReviewRight = () => {
        setAnimation('fadeOutRight');
        setTimeout(() => {
            setCurrentReviewIndex((prevIndex) =>
                prevIndex === reviewList.length - 1 ? 0 : prevIndex + 1
            );
            setAnimation('fadeInLeft');
        }, 1000); 
    };

const changeReviewLeft = () => {
        setAnimation('fadeOutLeft');
        setTimeout(() => {
            setCurrentReviewIndex((prevIndex) =>
                prevIndex === 0 ? reviewList.length - 1 : prevIndex - 1
            );
            setAnimation('fadeInRight');
        }, 1000); 
    };



const reviewList = reviews.map((review) => {
  return (
    <div className={`review ${animation}`}>
        
      <div  className= 'review-content'>
        <h2>{review.name}</h2>
        <h4>{review.project}</h4>
        <p>{review.review}</p>
      </div>
      <div className='reviewImg-container'
        style={{
          backgroundImage: `url(${review.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* <img src={review.image} alt={review.name}/> */}
      </div>
    </div>
  );
});



return (
    <div ref={ref} style={sectionStyle} className='reviews'>
    
      <CiCircleChevLeft className= 'back-button' onClick={changeReviewLeft}/>

        {reviewList[currentReviewIndex]}
      
      <CiCircleChevRight className= 'forward-button' onClick={changeReviewRight}/>

    </div>

)

} 

export default Review;