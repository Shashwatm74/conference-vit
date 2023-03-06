import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Nav = () => {
    return (
        <>
            <nav>
                <div className="logo">
                    <Link href="/">
                        <Image src="/logo.png" width={128} height={77} />
                    </Link>
                </div>
                <ul>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/speakers">Speakers</Link>
                    </li>
                    <li>
                        <Link href="/schedule">Schedule</Link>
                    </li>
                    <li>
                        <Link href="/venue">Venue</Link>
                    </li>
                    <li>
                        <Link href="/sponsors">Sponsors</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>


            </nav>
        </>
    )
}

export default Nav