import React, { useEffect, useRef, useState } from "react";
import styles from "@/styles/components/aboutpage/About.module.scss";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);



function About() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const hzLineRef = useRef(null);
  const lnUnHzRef = useRef(null);

  useEffect(() => {

    gsap.fromTo(sectionRef.current,
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        duration: 0.5,
        ease: "power2.inOut",
        y: 0,
        scrollTrigger: {
          // markers: true, //can be used to debug
          trigger: sectionRef.current,
          start: "top center+=100",
          toggleActions: "play none none reverse",

        }
      }
    );
  }, []);

  return (
    <>
      <section ref={sectionRef} className={styles.about} id="about">

        <div className={styles.body}>
          <div ref={headingRef} className={styles.heading}>
            <h1>
              We pick the network we <span>support</span>
              <br /> meticulously, jump in early and know <br />
              them inside-out
            </h1>
          </div>
          <div className={styles.cards}>
            <div ref={card1Ref} className={styles.card1}>
              <p>We were in top 30 of Celo's Great Stake Oil competition</p>
            </div>
            <div ref={card2Ref} className={styles.card2}>
              <p>
                We are member of the first cohort of Mina Protocol's Genesis
                Program
              </p>
            </div>
            <div ref={card3Ref} className={styles.card3}>
              <p>
                We survived testnets on Regers Network that lasted for almost
                two years
              </p>
            </div>
            <div ref={hzLineRef} className={styles.hz_line}>
              <hr />
            </div>
            <div ref={lnUnHzRef} className={styles.ln_un_hz}>
              <p>
                ... if that doesn't
                <br /> proof that we care,
                <br /> then <span>what?</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );

}

export default About;
