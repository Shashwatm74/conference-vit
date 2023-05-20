import React from "react";
import styles from "@/styles/components/DashboardSideBar/dashboardSidebar.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
const user = "Admin";


export default function Sidebar() {
    const router = useRouter();
    const currentRoute = router.pathname;
    return (
        <>
            <aside className={styles.sidebar}>
                <h1 className={styles.sidebargreeting}>
                    Hello {user}
                </h1>
                <Link className={`${styles.link} ${currentRoute === '/dashboard/administrator' ? styles.active : styles.nonActive}`} href="/dashboard/administrator" replace>Home</Link>
                <Link className={`${styles.link} ${currentRoute === '/dashboard/administrator/announcements' ? styles.active : styles.nonActive}`} href="/dashboard/administrator/announcements/">Announcements</Link>
                <Link className={`${styles.link} ${currentRoute === '/dashboard/administrator/submissions' ? styles.active : styles.nonActive}`} href="/dashboard/administrator/submissions/">Submissions</Link>
                <Link className={`${styles.link} ${currentRoute === '/dashboard/administrator/results' ? styles.active : styles.nonActive}`} href="/dashboard/administrator/results/">Results</Link>
                <Link className={`${styles.link} ${currentRoute === '/dashboard/administrator/privacyPolicy' ? styles.active : styles.nonActive}`} href="/dashboard/administrator/privacyPolicy/">Privacy Policy</Link>
                <Link className={`${styles.link} ${currentRoute === '/dashboard/profile' ? styles.active : styles.nonActive}`} href="/dashboard/profile">Profile</Link>
            </aside>

        </>
    )
}