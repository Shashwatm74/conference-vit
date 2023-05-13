// This is the dashboard page for the app

import React from "react";
import styles from "@/styles/components/dashboard/Dashboard.module.scss";
import Link from "next/link";
const user = "Admin";


export default function Dashboard() {
    return (
        <>

            <aside className={styles.sidebar}>
                <h1 className={styles.sidebargreeting}>
                    Hello {user}
                </h1>
                <Link href="/dashboard/administrator/" replace>Home</Link>
                <Link href="/dashboard/administrator/announcements/">Announcements</Link>
                <Link href="/dashboard/administrator/submissions/">Submissions</Link>
                <Link href="/dashboard/administrator/results/">Results</Link>
                <Link href="/dashboard/administrator/contactUs/">Contact us </Link>
                <Link href="/dashboard/administrator/privacyPolicy/">Privacy Policy</Link>
                <Link href="/dashboard/profile">Profile</Link>
            </aside>
            <section className={styles.dashboard}>
                <div className={styles.sectionWrapper}>
                    <div className={styles.profile}>
                        profile section
                        <button className={styles.editButton}>Edit</button>
                    </div>
                    <div className={styles.meetCard}>
                        <div className={styles.meetWindow}></div>
                    </div>
                    <div className={styles.registrationCard}></div>
                </div>
            </section>
        </>
    )
}