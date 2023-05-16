import React from 'react';
// import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/components/homepage/Nav.module.scss';
// import logo from '@/components/images/logo.png';
import navtoggle from '@/components/navtoggle.js';
import Image from 'next/image';
import pfp from '@/assets/images/defaultPfp.png';
import menuImage from '@/assets/images/menu.png';



const Nav = () => {
    return (
        <>

            <header className={styles.header}>
                <div className={styles.secondaryNavContainer}>


                    <Link className={styles.logoLink} href="/" replace >
                        <Image alt="logo" className={styles.logoImage} />
                    </Link>
                    <nav className={styles.nav2} id='SecondaryNav' data-visible="false">
                        <ul >
                            <li>
                                <a href="/#about" replace onClick={() => { document.getElementById("PrimaryNav").setAttribute("data-visible", "false"); document.getElementById("NavToggle").setAttribute("data-visible", "false"); }} >
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="/#speakers" replace onClick={() => { document.getElementById("PrimaryNav").setAttribute("data-visible", "false"); document.getElementById("NavToggle").setAttribute("data-visible", "false"); }} >
                                    Speakers
                                </a>
                            </li>
                            <li>
                                <a href="/#schedule" replace onClick={() => { document.getElementById("PrimaryNav").setAttribute("data-visible", "false"); document.getElementById("NavToggle").setAttribute("data-visible", "false"); }} >
                                    Schedule
                                </a>
                            </li>
                            <li>
                                <Link href="/home/registrations" replace onClick={() => { document.getElementById("PrimaryNav").setAttribute("data-visible", "false"); document.getElementById("NavToggle").setAttribute("data-visible", "false"); }} >
                                    Registration
                                </Link>
                            </li>
                            <li>
                                <a href="/#contact" replace onClick={() => { document.getElementById("PrimaryNav").setAttribute("data-visible", "false"); document.getElementById("NavToggle").setAttribute("data-visible", "false"); }} >
                                    Contact
                                </a>
                            </li>
                        </ul>

                    </nav>
                </div>

                <nav className={styles.nav} id='PrimaryNav' data-visible="false">
                    <ul>
                        <li>
                            <Link href="/login" replace onClick={() => { document.getElementById("PrimaryNav").setAttribute("data-visible", "false"); document.getElementById("NavToggle").setAttribute("data-visible", "false"); }}>
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboard/administrator" replace onClick={() => { document.getElementById("PrimaryNav").setAttribute("data-visible", "false"); document.getElementById("NavToggle").setAttribute("data-visible", "false"); }}>
                                Dash
                            </Link>
                        </li>

                    </ul>
                </nav>
                <button className={styles.navToggle2} id='NavToggle2' data-visible="false">
                    <div className={styles.menu}>
                        <Image alt="menu" className={styles.menuImage} src={menuImage} />
                    </div>
                </button>

                <button className={styles.navToggle} id='NavToggle' data-visible="false">
                    <div className={styles.profilePic}>
                        <Image alt="profile picture" className={styles.pfp} src={pfp} />
                    </div>
                </button>


            </header >
            <script src={navtoggle} defer></script>
        </>
    )
}

export default Nav