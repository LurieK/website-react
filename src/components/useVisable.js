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

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref, threshold]);

    return [isVisible, ref];
};
export default useVisibile