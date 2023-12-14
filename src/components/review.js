import reviews from './reviewObj';
import useVisibility from '../components/useVisable';


function Review (){
  const [isVisible, ref] = useVisibility();

    const sectionStyle = {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(100px)'
    };

const reviewSlide = reviews.map((review) => {
  return (
    <div className='review'>
        <div>
        <img src={review.image} alt={review.name}/>
      </div>
      <div className='review-content {review.name}'>
        <h2>{review.name}</h2>
        <h4>{review.project}</h4>
        <p>{review.review}</p>
      </div>
    </div>
  );
});

return (
    <div ref={ref} style={sectionStyle} className='reviews'>
    {reviewSlide}
    </div>

)

} 

export default Review;