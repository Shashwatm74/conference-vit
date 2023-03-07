import React from 'react'
import Head from 'next/head'
import styles from '@/styles/components/schedulepage/Shedule.module.scss'

function Schedule() {
    return (
        <>
            <Head>
                <title>Schedule-VIT Conference </title>
                <meta name="description" content="Conference on Linear Algebra" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className={styles.schedule} >
                Schedule
            </section>
        </>
    )
}

export default Schedule