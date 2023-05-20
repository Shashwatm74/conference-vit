import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import styles from "@/styles/components/countDownTimer/countDownTimer.module.scss";



const CountdownTimer = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    function calculateTimeLeft() {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                DAYS: Math.floor(difference / (1000 * 60 * 60 * 24)),
                HOURS: Math.floor((difference / (1000 * 60 * 60)) % 24),
                MINUTES: Math.floor((difference / 1000 / 60) % 60),
                SECONDS: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    }

    const timerComponents = [];


    Object.keys(timeLeft).forEach((interval) => {

        if (!(interval == "SECONDS")) {
            <div className={styles.timer}>
                {
                    timerComponents.push(

                        <div className={styles.innerContainer} key={interval}>
                            <span className={styles.timerNum}>{timeLeft[interval]} </span> {" "}
                            <span className={styles.timerText}>{interval}</span>
                            <span className={styles.timerColon}>{':'}</span>
                        </div>
                    )
                }
            </div>
        }
        else {
            <div className={styles.timer}>
                {
                    timerComponents.push(

                        <div className={styles.innerContainer} key={interval}>
                            <span className={styles.timerNum}>{timeLeft[interval]} </span> {" "}<span className={styles.timerText}>{interval}</span>
                        </div>
                    )
                }
            </div>
        }
    });

    return (
        <div className={styles.timer}>
            {timerComponents.length ? timerComponents : <span>Click to Join the Meet !</span>}
        </div>
    );


}
export default dynamic(() => Promise.resolve(CountdownTimer), { ssr: false });
