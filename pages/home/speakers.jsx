import React, { useEffect, useRef } from 'react'
import styles from '@/styles/components/speakerpage/Speakers.module.scss'
import Cards from '@/components/cards';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);



function Speakers() {
    const headingRef = useRef(null);
    useEffect(() => {

        gsap.fromTo(headingRef.current,
            {
                autoAlpha: 0,
                y: 10
            },
            {
                autoAlpha: 1,
                duration: 0.5,
                ease: "power2.inOut",
                y: 0,
                scrollTrigger: {
                    // markers: true, //can be used to debug
                    trigger: headingRef.current,
                    start: "top center+=100",
                    toggleActions: "play none none reverse",

                }
            }
        );
    }, []);

    return (
        <>

            <section className={styles.speakers} id="speakers">
                <div ref={headingRef} className={styles.heading}>
                    <h1>
                        "Voices That <span>Inspire:</span><br /> Meet the Speakers Who Will Ignite Your Passion<br /> and Spark Your Imagination"
                    </h1>
                </div>
                <div className={styles.card_carousel}>
                    <Cards />
                </div>
            </section>
        </>
    )
}

export default Speakers