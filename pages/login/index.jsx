import React from 'react';
import styles from '@/styles/components/login_and_signup_page/Login.module.scss'
import Head from 'next/head';

function Login() {
    return (
        <>
            <Head>
                <title>Login-VIT Conference </title>
                <meta name="description" content="Conference on Linear Algebra" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <section data-scroll-section className={styles.login}>
                <div className={styles.login_container}>
                    <div className={styles.login_card_wrapper}>
                        <div><span className={styles.span_heading}>Login</span></div>
                        <div>User Name</div>
                        <input className={styles.input_box} placeholder='Enter user name...' required />
                        <div>Password</div>
                        <input className={styles.input_box} placeholder='Enter password..' required />
                        <button className={styles.green_button}>Submit</button>
                        <div className={styles.signup_text}>Don't have an account? <span className={styles.signup_link}><a href='/signup/'> Sign up</a></span></div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Login