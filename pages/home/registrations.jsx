import React from 'react';
import Head from 'next/head';
import styles from '@/styles/components/registrationpage/Registration.module.scss'


function Registration() {
    return (
        <>
            <Head>
                <title>Registrations-VIT Conference </title>
                <meta name="description" content="Conference on Linear Algebra" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>Registration</div>
        </>
    )
}

export default Registration