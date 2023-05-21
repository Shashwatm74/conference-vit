//ooga booga
// This is the dashboard profile page for the app

import React from "react";
import styles from "@/styles/components/dashboard/Profile.module.scss";

export default function Dashboard(){
   return(
       <>
        <section section data-scroll-section className={styles.profile} id="profile">
            <div className={styles.sectionWrapper}>
                <div className={styles.profileCard}>
                    ACCOUNT SETTINGS
                    <div className={styles.photo}>Photo</div>
                        <div className={styles.headCard}>
                            <div className={styles.nameHead}>John Wick</div>
                            <div className={styles.emailHead}>johnwick@gmail.com</div>
                        </div>
                        <div className={styles.detailsBox}>
                            {/* <div className={styles.boxSet}> */}
                                {/* Username */}
                                <div className={styles.usernameBox}>@johnwick123</div>
                            {/* </div> */}
                            {/* <div className={styles.boxSet} > */}
                                {/* Full Name */}
                                <div className={styles.nameBox}>John Wick</div>
                            {/* </div> */}
                            {/* <div className={styles.boxSet}> */}
                                {/* Email Id */}
                                <div className={styles.emailBox}>johnwick@gmail.com</div>
                            {/* </div> */}
                            {/* <div className={styles.boxSet}> */}
                                {/* Permanent Address */}
                                <div className={styles.addressBox}>1234 Church Street Rd</div>
                            {/* </div> */}
                            {/* <div className={styles.boxSet}> */}
                                {/* City */}
                                <div className={styles.cityBox}>New York City</div>
                            {/* </div> */}
                            {/* <div className={styles.boxSet}> */}
                                {/* Pincode */}
                                <div className={styles.pinBox}>987654</div>
                            {/* </div> */}
                        </div>
                    </div>
                 </div>
        </section>      
       </>
   )
}