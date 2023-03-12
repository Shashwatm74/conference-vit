import { useEffect } from "react";
// import LocomotiveScroll from "locomotive-scroll";
import 'locomotive-scroll/src/locomotive-scroll.scss';





export default function useLocoScroll(start) {
    // useEffect(() => {

    //     if (!start) return;
    //     const scrollEl = document.querySelector('#main-container');

    //     import("locomotive-scroll").then(locomotiveModule => {
    //         const locoscroll = new locomotiveModule.default({
    //             el: scrollEl,
    //             smooth: true,
    //             multiplier: 1,
    //             class: "is-reveal"
    //         })
    //     })

    // }, [start]);
    useEffect(() => {
        ; (async () => {
            try {
                const LocomotiveScroll = (await import('locomotive-scroll')).default
                const dataScrollContainer = document.querySelector(
                    '[data-scroll-container]',
                )

                if (!dataScrollContainer) {
                    console.warn(
                        'locomotive-scroll: [data-scroll-container] dataset was not found. You likely forgot to add it which will prevent Locomotive Scroll to work.',
                    )
                }

                window.locomotive = new LocomotiveScroll({
                    el: dataScrollContainer ?? undefined,
                    smooth: true,
                })
            } catch (error) { }
        })()

        return () => {
            window.locomotive?.destroy()
        }
    }, [])
}