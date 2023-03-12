import React, { useEffect, useRef, useState } from 'react'
import styles from '@/styles/components/speakerpage/Speakers.module.scss'
import Cards from '@/components/cards';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

const speakers = [

    {
        id: 1,
        name: "Speaker 1",
        details: "Details speaker 1"

    },

    {
        id: 2,
        name: "Speaker 2",
        details: "Details speaker 2"

    },

    {
        id: 3,
        name: "Speaker 3",
        details: "Details speaker 3"

    },

    {
        id: 4,
        name: "Speaker 4",
        details: "Details speaker 4"

    },

    {
        id: 5,
        name: "Speaker 5",
        details: "Details speaker 5"

    },

    {
        id: 6,
        name: "Speaker 6",
        details: "Details speaker 6"

    },

    {
        id: 7,
        name: "Speaker 7",
        details: "Details speaker 7"

    },
    {
        id: 8,
        name: "Speaker 8",
        details: "Details speaker 8"

    }

]


function Speakers() {
    const headingRef = useRef(null);
    const cardRef = useRef(null);
    // const [activeSpeaker, setActiveSpeaker] = useState(1);
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

            <section data-scroll-section className={styles.speakers} id="speakers">
                <div ref={headingRef} className={styles.heading}>
                    <h1>
                        "Voices That <span className={styles.span}>Inspire:</span><br /> Meet the Speakers Who Will Ignite Your Passion<br /> and Spark Your Imagination"
                    </h1>
                </div>
                <div className={styles.card_gallery_wrap}>

                    <div className={styles.card_carousel}>
                        {speakers.map((speakers, index) => (

                            < Cards cardRef={cardRef}
                                key={speakers.id}
                                index={index}
                                {...speakers}
                            // updateActiveSpeaker={index => setActiveSpeaker(index + 1)}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Speakers