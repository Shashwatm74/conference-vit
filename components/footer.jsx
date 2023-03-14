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
                        <div className={styles.link1}>Convenors</div>
                        <div className={styles.link1}>Register at</div>
                        <div className={styles.link1}>Designed and Developed by
                        </div>
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