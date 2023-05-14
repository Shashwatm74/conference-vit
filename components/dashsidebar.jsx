import React from "react";
import styles from "@/styles/components/DashboardSideBar/dashboardSidebar.module.scss";
import Link from "next/link";
const user = "Admin";


export default function Sidebar() {
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
        </>
    )
}