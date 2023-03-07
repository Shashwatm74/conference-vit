import React from 'react'
import Image from 'next/image';
import styles from '@/styles/components/homepage/Home.module.scss';
import formula from '@/public/formula.png';
import func from '@/public/function.png';
import meth from '@/public/maths.png';
import trig from '@/public/trigonometry.png';



function HomePage() {
    return (

        <section className={styles.home}>
            <div className={styles.container}>
                <Image className={styles.image1} src={formula} />
                <Image className={styles.image2} src={func} />
                <Image className={styles.image3} src={meth} />
                <Image className={styles.image4} src={trig} />

                <div className={styles.btnContainer}>
                    <button className={styles.btn}></button>
                </div>
            </div>
        </section>
    )
}

export default HomePage