import React from 'react'
import Head from 'next/head'
import styles from '@/styles/components/speakerpage/Speakers.module.scss'
import Cards from '@/components/cards';
function Speakers() {
    return (
        <>

            <section className={styles.speakers} id="speakers">
                speakers
                <Cards />
            </section>
        </>
    )
}

export default Speakers