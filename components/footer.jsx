import React from 'react'
import styles from '@/styles/Footer.module.scss'

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.rows}> 
                    <div>
                        <img className={styles.image} src="" alt="Logo" />
                    </div> 
                    <div className={styles.link1}>Facebook</div>
                    <div className={styles.link1}>Instagram</div>
                    <div className={styles.link1}>Twitter</div>
                    <div className={styles.link1}>Youtube</div>
                </div> 
                <div className={styles.copyright}>
                    <hr />
                    &#169; Vellore institute of Technology
                </div>   
            </div>
        </footer>
    )
}

export default Footer