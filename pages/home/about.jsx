import React from 'react';
import Head from 'next/head';
import styles from '@/styles/components/aboutpage/About.module.scss'


function About() {
    return (
        <>
            <Head>
                <title>About us-VIT Conference </title>
                <meta name="description" content="Conference on Linear Algebra" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className={styles.about} >
                About
            </section>
        </>
    )
}

export default About