import React from 'react'
import styles from '@/styles/components/speakerpage/Cards.module.scss';

function Cards() {
    return (
        <>
        <div className={styles.card}>
            <div className={styles.container}>
                <div className={styles.subcontainer}>Name</div>
                <div className={styles.subcontainer}>Details</div>
                <div className={styles.button}>^</div>
            </div>
        </div>
        </>
        
    )
}

export default Cards

