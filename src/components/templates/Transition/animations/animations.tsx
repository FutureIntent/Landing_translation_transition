const duration = 0.5;

const planeVariants = {
    plane1: {
        transformOrigin: 'center right', 
        rotateY: -90, 
        transition: {
            duration,
            delay: duration * 2,
            ease: 'easeIn'
        }, 
        transitionEnd: {
            display: 'none'
        } 
    },
    plane2: {
        transformOrigin: 'center bottom', 
        rotateX: 90, 
        transition: {
            duration, 
            delay: duration * 3,
            ease: 'circIn'
        }, 
        transitionEnd: {
            display: 'none'
        } 
    },
    plane3: {
        transformOrigin: 'center left', 
        rotateY: 90, 
        transition: {
            duration, 
            delay: duration * 4,
            ease: 'anticipate'
        }, 
        transitionEnd: {
            display: 'none'
        } 
    },
    plane4: {
        transformOrigin: 'center bottom', 
        rotateX: 180, 
        transition: {
           duration, 
           delay: duration * 5,
           ease: 'circInOut'
        }, 
        transitionEnd: {
           display: 'none'
        }
    },
    container: {
        display: 'none',
        transition: {
            delay: duration * 5 + duration
        }
    }
}

export const shortVariants = {
    startLogo1: {
        x: 0,
        y: 0,
        transition: {
            duration: duration * 2,
            ease: 'easeOut'
        }
    },
    startLogo2: {
        x: 0,
        y: 0,
        transition: {
            duration: duration * 2,
            ease: 'easeOut'
        }
    },
    finishLogo1: {
        x: '100vw',
        y: '-100vh',
        transition: {
            duration,
            delay: duration,
            ease: 'easeIn'
        }
    },
    finishLogo2: {
        x: '-100vw',
        y: '100vh',
        transition: {
            duration,
            delay: duration,
            ease: 'easeIn'
        }
    }
}

export default planeVariants;