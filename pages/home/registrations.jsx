import React from 'react';
import Head from 'next/head';
import styles from '@/styles/components/registrationpage/Registration.module.scss'


function Registration() {
    return (
        <>

            <section className={styles.registration} id="registrations">
                Registrations
            <div className={styles.container}>
                <div className={styles.column1}>
                    <div className={styles.wrapper1}>
                        <h1 className={styles.head}>
                            Giving back
                        </h1>
                        <div className={styles.sectioned_content}>
                            <p className={styles.content1}>Lorem ipsum dolor sit amet.sdfghjklsdfghjksdfghjklsdfghjk Eum tempora laborum aut suscipit ullam ad impedit commodi ut distinctio iste et odio voluptatem. Ut reprehenderit itaque vel eveniet consequuntur sit tempora quaerat qui deleniti voluptatem.</p>
                            <img className={styles.image}  src="public\open-book.png"/>
                        </div>
                    </div>
                </div>
                <div className={styles.column2}>
                    <div className={styles.wrapper1}>
                        <h1>
                            <img src = 'public\open-book.png'/>
                        </h1>
                        <p className={styles.content2}>Lorem ipsum sdfghjklsdfghjkfg xcvbnm, dfghjkdfghjkdfghjksdfghjkasertyuiowertyu dolor sit amet. Eum tempora laborum aut suscipit ullam ad impedit commodi ut disti</p>
                    </div>
                </div>
            </div>
            </section>
        </>
    )
}

export default Registration