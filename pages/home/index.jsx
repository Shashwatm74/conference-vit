import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import styles from '@/styles/components/homepage/Home.module.scss';
import formula from '@/public/formula.png';
import func from '@/public/function.png';
import meth from '@/public/maths.png';
import trig from '@/public/trigonometry.png';




function HomePage() {
    return (
        <>

            <Head>
                <title>VIT Conference </title>
                <meta name="description" content="Conference on Linear Algebra" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className={styles.home}>

                <div className={styles.btop} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Back to top &gt;</div>

<<<<<<< HEAD
            <div className={styles.container}>
                <Image className={styles.image1} src={formula} alt="" />
                <Image className={styles.image2} src={func} alt="" />
                <Image className={styles.image3} src={meth} alt="" />
                <Image className={styles.image4} src={trig} alt=""/>
=======
                <div className={styles.container}>
                    <Image className={styles.image1} src={formula} />
                    <Image className={styles.image2} src={func} />
                    <Image className={styles.image3} src={meth} />
                    <Image className={styles.image4} src={trig} />
>>>>>>> 31ba183bf0aa8ac0d2285ddaa3040f821d325521

                    <div className={styles.btnContainer}>
                        <button className={styles.btn} ><span className={styles.span_arrow} >&gt;</span></button>
                    </div>
                </div>
            </section>

        </>

    )
}

export default HomePage