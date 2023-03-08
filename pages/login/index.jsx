import React from 'react';
import styles from '@/styles/components/loginpage/Login.module.scss'
import Head from 'next/head';

function Login() {
    return (
        <>
            <Head>
                <title>Login-VIT Conference </title>
                <meta name="description" content="Conference on Linear Algebra" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <section className={styles.login}>Login</section>
        </>
    )
}

export default Login