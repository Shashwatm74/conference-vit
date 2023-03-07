import React from 'react';
import Head from 'next/head';
import styles from '@/styles/components/contactpage/Contact.module.scss'


function Contact() {
    return (
        <>
            <Head>
                <title>Contact Us-VIT Conference </title>
                <meta name="description" content="Conference on Linear Algebra" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className={styles.contact} >
                Contact
            </section>
        </>
    )
}

export default Contact