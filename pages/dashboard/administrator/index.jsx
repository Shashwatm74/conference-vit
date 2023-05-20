// This is the dashboard home page for the app

import React from "react";
import styles from "@/styles/components/dashboard/Dashboard.module.scss";
import { Button } from "@geist-ui/react";
import CountdownTimer from "@/components/timer/timer";


export default function Dashboard() {
    const dateTimeTarget = new Date('June 3, 23 17:30:00 GMT+05:30').getTime();
    return (
        <>


            <section className={styles.dashboard}>
                <div className={styles.sectionWrapper}>
                    <div className={styles.profile}>
                        profile section
                        <button className={styles.editButton}>Edit</button>
                    </div>

                    <div className={styles.meetCard}>
                        <div className={styles.meetWindow}>
                            {/* <CountdownTimer targetDate={dateTimeTarget} /> */}
                        </div>
                        <div className={styles.meetJoin}>
                            <p>
                                The the join meet button will be enabled once the host starts the meeting
                            </p>
                            <div className={styles.joinButton}>
                                <Button auto type="success" scale={0.75} className={styles.button}>Join The Meet</Button>
                            </div>
                        </div>
                    </div>


                    <div className={styles.registrationCard}></div>
                </div>
            </section>
        </>
    )
}