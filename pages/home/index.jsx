import React from 'react'
import styles from '@/styles/components/homepage/Home.module.scss';


function HomePage() {
    return (

        <section className={styles.home}>
            <div className={styles.container}>
                <div className={styles.btnContainer}>
                    <button className={styles.btn}></button>
                </div>
            </div>
        </section>
    )
}

export default HomePage