import React from "react";
import Head from "next/head";
import styles from "@/styles/components/aboutpage/About.module.scss";

function About() {
  return (
    <>
 
      <section className={styles.about} id="about">
        <div className={styles.body}>
          <div className={styles.heading}>
            <h1>
              We pick the network we <span>support</span>
              <br /> meticulously, jump in early and know <br />
              them inside-out
            </h1>
          </div>
          <div className={styles.cards}>
            <div className={styles.card1}>
              <p>We were in top 30 of Celo's Great Stake Oil competition</p>
            </div>
            <div className={styles.card2}>
              <p>
                We are member of the first cohort of Mina Protocol's Genesis
                Program
              </p>
            </div>
            <div className={styles.card3}>
              <p>
                We survived testnets on Regers Network that lasted for almost
                two years
              </p>
            </div>
            <div className={styles.hz_line}>
              <hr />
            </div>
            <div className={styles.ln_un_hz}>
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
