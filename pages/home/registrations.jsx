/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useRef } from 'react';
import styles from '@/styles/components/registrationpage/Registration.module.scss';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";


gsap.registerPlugin(ScrollTrigger);

function Registration() {
    const headingRef = useRef(null);
    const card1Ref = useRef(null);
    const card2Ref = useRef(null);

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
    useEffect(() => {

        gsap.fromTo(card1Ref.current,
            {
                autoAlpha: 0,
                x: -15
            },
            {
                autoAlpha: 1,
                duration: 0.5,
                delay: 0.1,
                ease: "power2.inOut",
                x: 0,
                scrollTrigger: {
                    // markers: true, //can be used to debug
                    trigger: card1Ref.current,
                    start: "top center+=180",
                    toggleActions: "play none none reverse",

                }
            }
        );
    }, []);
    useEffect(() => {

        gsap.fromTo(card2Ref.current,
            {
                autoAlpha: 0,
                x: 15
            },
            {
                autoAlpha: 1,
                duration: 0.5,
                delay: 0.1,
                ease: "power2.inOut",
                x: 0,
                scrollTrigger: {
                    // markers: true, //can be used to debug
                    trigger: card2Ref.current,
                    start: "top center+=180",
                    toggleActions: "play none none reverse",

                }
            }
        );
    }, []);


    return (
        <>

            <section data-scroll-section className={styles.registration} id="registrations">

                <div ref={headingRef} className={styles.heading}>
                    <h1>
                        Unlock Your <span>Potential:</span> <br /> Register Today to Experience the Power of <br /> Connection, Growth, and Inspiration!

                    </h1>
                </div>

                <div className={styles.cards_left}>
                    <div ref={card1Ref} className={styles.card1}>
                        <p>Day 1, <br /> Registration and Welcome Address<br />
                            Keynote Speech on "The Beauty of Mathematics"<br />
                            Panel Discussion on "Current Trends and Challenges in Math Education"</p>
                    </div>

                </div>

                <div className={styles.cards_right}>
                    <div ref={card2Ref} className={styles.card2}>
                        <p>
                            Day 3,<br />
                            Keynote Speech on "The Future of Mathematics: Opportunities and Challenges"<br />
                            Panel Discussion on "Careers in Mathematics and Related Fields"
                        </p>
                    </div>
                </div>


            </section>
        </>
    )
}

export default Registration