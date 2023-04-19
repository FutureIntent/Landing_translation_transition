import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useLayoutEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

export const useGsap = () => {
    useLayoutEffect(() => {
        if (window.innerWidth > 768) {
            const tl = gsap.timeline({});

            tl.to('#intro', {
                opacity: 0,
                scrollTrigger: {
                    scroller: window,
                    fastScrollEnd: true,
                    trigger: '[data-scroll-item="solution-bg"]',
                    start: 'top top',
                    scrub: true,
                },
            })
                .to('[data-scroll-item="solution-bg"]', {
                    top: '-90%',
                    duration: 0.5,
                    scrollTrigger: {
                        scroller: window,
                        trigger: '#intro',
                        start: 'top top',
                        scrub: true,
                        pin: true,
                    },
                })
                .to('[data-scroll-section="solutions"]', {
                    opacity: 0,
                    y: '25%',
                    delay: 0.5,
                    backgroundColor: '#050910',
                    scrollTrigger: {
                        scroller: window,
                        fastScrollEnd: true,
                        trigger: '#solutions',
                        start: '+=60% center',
                        preventOverlaps: true,
                        scrub: true,
                    },
                })
                // .to('[data-scroll-item="solution-text"]', {
                //     opacity: 0,
                //     scrollTrigger: {
                //         scroller: window,
                //         fastScrollEnd: true,
                //         trigger: '#methodology',
                //         start: 'bottom top',
                //         scrub: true,
                //     },
                // })
                .to('#methodology-cards', {
                    xPercent: -100,
                    x: () => window.innerWidth,
                    ease: 'none',
                    scrollTrigger: {
                        scroller: window,
                        trigger: '#methodology-cards',
                        start: 'top top',
                        end: () => `${window.innerWidth * 3} bottom`,
                        scrub: 1,
                        pin: true,
                        snap: {
                            snapTo: 1 / 2,
                            duration: { min: 0.5, max: 1 },
                            delay: 0,
                            inertia: false,
                        },
                    },
                })
                .to('#methodology-title', {
                    xPercent: '-100',
                    scrollTrigger: {
                        scroller: window,
                        trigger: '#methodology-title',
                        start: 'top top',
                        end: () => `${window.innerWidth * 3} bottom`,
                        scrub: true,
                        pin: true,
                    },
                })
                .to('[data-scroll-section="solutions"]', {
                    top: '-25%',
                    scrollTrigger: {
                        scroller: window,
                        fastScrollEnd: true,
                        trigger: '#footer',
                        start: 'center center',
                        scrub: true,
                    },
                });

            if (window.innerWidth > 1024) {
                tl.to('#bg', {
                    opacity: 1,
                    duration: 1,
                    keyframes: [
                        {
                            width: `41.25%`,
                        },
                        {
                            opacity: 0,
                        },
                    ],
                    scrollTrigger: {
                        scroller: window,
                        trigger: '#specialists',
                        start: 'center center',
                        pin: true,
                        scrub: 0,
                    },
                });
            }
        }

        return () => {
            ScrollTrigger.killAll();
        };
    }, []);

    useEffect(() => {
        window.addEventListener('resize', () => {
            if (window.innerWidth < 768) {
                ScrollTrigger.killAll();
            } else {
                ScrollTrigger.refresh();
            }
        });

        return () => {
            window.removeEventListener('resize', () => {
                if (window.innerWidth < 768) {
                    ScrollTrigger.killAll();
                } else {
                    ScrollTrigger.refresh();
                }
            });
        };
    }, []);

    return null;
};
