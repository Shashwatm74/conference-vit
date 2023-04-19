import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Head from "next/head";
import styles from "@/styles/components/homepage/Home.module.scss";
import formula from "@/public/formula.png";
import func from "@/public/function.png";
import meth from "@/public/maths.png";
import trig from "@/public/trigonometry.png";
import "../_app";

function HomePage() {
  const backToTopRef = useRef(null);
  return (
    <>
      <Head>
        <title>VIT Conference </title>
        <meta name="description" content="Conference on Linear Algebra" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section data-scroll-section className={styles.home}>
        <div className={styles.sectionWrapper}>
          <div
            ref={backToTopRef}
            className={styles.btop}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <a>Back to top</a> &gt;
          </div>

          <div className={styles.container}>
            <Image className={styles.image1} alt="" src={formula} />
            <Image className={styles.image2} alt="" src={func} />
            <Image className={styles.image3} alt="" src={meth} />
            <Image className={styles.image4} alt="" src={trig} />
            <h1 className={styles.title}>Mathematical Frontier Symposium</h1>
            <h3 className={styles.subtitle}>
              Transforming Ideas into Solutions: Collaborating to Shape the
              Future of Mathematics
            </h3>

            <div className={styles.btnContainer}>
            <button
                className={styles.btn}
                onClick={() =>
                  document.getElementById("about").scrollIntoView()
                }
              >
                <span className={styles.span_arrow}>&gt;</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
