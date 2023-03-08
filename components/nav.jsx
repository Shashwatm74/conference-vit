import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/components/homepage/Nav.module.scss'

const Nav = () => {
    return (
        <>

            <nav className={styles.nav}>
                <ul >
                    <div className="logo">
                        <Link href="/">
                            <Image src="/logo.png" width={128} height={77} />
                        </Link>
                    </div>
                    <li>
                        <Link href="#about" >About</Link>
                    </li>
                    <li>
                        <Link href="#speakers">Speakers</Link>
                    </li>
                    <li>
                        <Link href="#schedule">Schedule</Link>
                    </li>
                    <li>
                        <Link href="#registrations">Registration</Link>
                    </li>
                    <li>
                        <Link href="/home/contact">Contact</Link>
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