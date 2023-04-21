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
                <Link href="/dashboard/}">Home</Link>
                <Link href="/dashboard/}">Announcements</Link>
                <Link href="/dashboard/}">Submissions</Link>
                <Link href="/dashboard/}">Results</Link>
                <Link href="/dashboard/}">Contact us </Link>
                <Link href="/dashboard/}">Privacy Policy</Link>

                <Link href="/dashboard/profile">profile</Link>
            </aside>
            <section className={styles.dashboard}>

                <div className={styles.sectionWrapper}>
                </div>
            </section>
        </>
    )
}