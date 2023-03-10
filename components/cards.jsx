import React from 'react'
import styles from '@/styles/components/speakerpage/Cards.module.scss';

function Cards() {
    return (
        <>
        
            <div className={styles.card}>
                <div className={styles.image}></div>   
                <div className={styles.container}>
                    <div className={styles.namecontainer}>Name</div>
                    <div className={styles.detailcontainer}>Details</div>
                </div>
                <div className={styles.button}></div>
            </div>
        </>
    )
}

export default Cards

