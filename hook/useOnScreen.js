import React, { useState, useRef, useEffect } from "react";

export default function useOnScreen(ref) {
    const [isIntersecting, setIntersecting] = useState(false);



    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                //update state 
                setIntersecting(entry.isIntersecting ?? false)
            },
            {
                threshold: 0.9
            }
        )
        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }
        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        }
    }, [ref]);

    return isIntersecting;

}