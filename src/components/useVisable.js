import { useState, useRef, useEffect } from 'react';

const useVisibile = (threshold = 0.1) => {

//set visable stat to false
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    //when the given section comes into view IntersectingObserver state is set to true
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);//observer stops listening
                }
            },
            { threshold: threshold }
        );
        const currentRef= ref.current;

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [threshold]);

    return [isVisible, ref];
};
export default useVisibile