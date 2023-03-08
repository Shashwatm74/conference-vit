import React from 'react'
import Head from 'next/head'
import styles from '@/styles/components/speakerpage/Speakers.module.scss'
import Cards from '@/components/cards';
function Speakers() {
    return (
        <>
            <Head>
                <title>Speakers-VIT Conference </title>
                <meta name="description" content="Conference on Linear Algebra" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className={styles.speakers} id="speakers">
                speakers
                <Cards/>
            </section>
        </>
    )
}

export default Speakers