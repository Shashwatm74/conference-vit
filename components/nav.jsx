import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/components/homepage/Nav.module.scss'
import $ from "jquery"

const Nav = () => {
    return (
        <>

            <nav className={styles.nav}>
                <ul className={styles.nav}>
                    <div className="logo">
                        <Link href="/" replace >

                            <Image src="/logo.png" width={128} height={77} />

                        </Link>
                    </div>
                    <li>
                        <Link href="/#about" replace >About</Link>


                    </li>
                    <li>
                        <Link href="/#speakers" replace>Speakers</Link>
                    </li>
                    <li>
                        <Link href="/#schedule" replace>Schedule</Link>
                    </li>
                    <li>
                        <Link href="/#registrations" replace>Registration</Link>
                    </li>
                    <li>
                        <Link href="/#contact" replace>Contact</Link>
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