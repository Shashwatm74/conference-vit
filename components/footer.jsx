import React from 'react'
import styles from '@/styles/Footer.module.scss'

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>

                <div className={styles.copyright}>
                    <hr />
                    &#169; Vellore institute of Technology
                </div>
            </div>
        </footer>
    )
}

export default Footer