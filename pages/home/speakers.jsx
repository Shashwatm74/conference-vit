import React from 'react'
import Head from 'next/head'
import styles from '@/styles/components/speakerpage/Speakers.module.scss'
function Speakers() {
    return (
        <>
            <Head>
                <title>Speakers-VIT Conference </title>
                <meta name="description" content="Conference on Linear Algebra" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className={styles.speakers} >
                speakers
            </section>
        </>
    )
}

export default Speakers