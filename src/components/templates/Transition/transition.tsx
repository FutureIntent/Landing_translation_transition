import { motion, useAnimationControls } from "framer-motion";
import styled from "styled-components";
import useTransition from "@hooks/useTransition";
import Logo from "./components/logo";
import Plane from './components/plane';
import planeVariants, { shortVariants } from './animations/animations';
import { TransitionInterface } from "./types/types";

const Container = styled.div`
height: 100vh;
position: fixed;
width: 100vw;
z-index: 500;
`;

const Wrapper = styled.div`
height: 100%;
perspective: 30rem;
position: relative;
transform-style: preserve-3d;
width: 100%;
`;

const Transition = ({shortened = false, backgroundColor = 'rgba(0, 0, 255, 1)'}: TransitionInterface) => {

    const controlsContainer = useAnimationControls();
    const controlsWrapper = useAnimationControls();
    const controlsLogo1 = useAnimationControls();
    const controlsLogo2 = useAnimationControls();

    useTransition({controlsContainer, controlsWrapper, controlsLogo1, controlsLogo2});

    return(
        <Container as={motion.div} animate={!shortened ? "container" : controlsContainer} variants={!shortened ? planeVariants : shortVariants}>
            {!shortened ? 
                <Wrapper>
                    <Plane backgroundColor={backgroundColor} top={0} left={0} animate="plane1" variants={planeVariants} />
                    <Plane backgroundColor={backgroundColor} top={0} left={50} animate="plane2" variants={planeVariants} />
                    <Plane backgroundColor={backgroundColor} top={50} left={50} animate="plane3" variants={planeVariants} />
                    <Plane backgroundColor={backgroundColor} top={50} left={0} animate="plane4" variants={planeVariants} />
                </Wrapper> :
                <Wrapper as={motion.div} initial={{backgroundColor}} animate={controlsWrapper} variants={shortVariants}>
                    <Logo backgroundColor={backgroundColor} clipPath='polygon(100% 0, 0 0, 0 100%)' initial={{x: '-100vw', y: '100vh'}} animate={controlsLogo1} variants={shortVariants} />
                    <Logo backgroundColor={backgroundColor} clipPath='polygon(100% 0, 100% 100%, 0 100%)' initial={{x: '100vw', y: '-100vh'}} animate={controlsLogo2} variants={shortVariants} />
                </Wrapper>
            }          
        </Container>
    );
}

export default Transition;