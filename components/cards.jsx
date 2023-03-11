import React, { useEffect, useRef } from 'react'
import styles from '@/styles/components/speakerpage/Cards.module.scss';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from 'gsap';
import Script from 'next/script';

gsap.registerPlugin(ScrollTrigger);
function Cards(

    {
        name,
        details,
        // updateActiveSpeaker,
        // index
    }
) {

    const cardRef = useRef(null);


    useEffect(() => {
        cardRef.current,
            gsap.fromTo(cardRef.current,
                {

                    x: 600,
                    delay: 1
                },
                {
                    duration: 5,
                    scrub: 1,
                    delay: 1,
                    ease: "none",
                    x: -1600,
                    scrollTrigger: {
                        markers: true, //can be used to debug
                        trigger: cardRef.current,
                        start: "top center-=250",
                        end: "top center+=250",

                        toggleActions: "play none none reverse",

                    }
                }
            );
    }, [])
    return (
        <>

            <div ref={cardRef} className={styles.card_wrapper}>
                <div className={styles.card}>
                    <div className={styles.image}></div>
                    <div className={styles.container}>
                        <div className={styles.namecontainer}>{name}</div>
                        <div className={styles.detailcontainer}>{details}</div>
                    </div>
                    <div className={styles.button}></div>
                </div>
            </div>

        </>
    )
}

export default Cards

