import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/components/homepage/Nav.module.scss'
import $ from "jquery"

const Nav = () => {
    return (
        <>

            <nav data-scroll-section className={styles.nav}>
                <ul className={styles.nav}>
                    <div className="logo">
                        <a href="/" replace >

                            <Image src="/logo.png" width={128} height={77} />

                        </a>
                    </div>
                    <li>
                        <a href="/#about" replace >About</a>


                    </li>
                    <li>
                        <a href="/#speakers" replace>Speakers</a>
                    </li>
                    <li>
                        <a href="/#schedule" replace>Schedule</a>
                    </li>
                    <li>
                        <a href="/#registrations" replace>Registration</a>
                    </li>
                    <li>
                        <a href="/#contact" replace>Contact</a>
                    </li>
                    <li>
                        <Link href="/login">Login</Link>
                    </li>
                </ul>
            </nav>

        </>
    )
}

export default Nav