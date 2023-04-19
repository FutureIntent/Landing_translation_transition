import LogoWhite from "@components/molecules/Icons/LogoWhite";
import { motion } from "framer-motion";
import styled from "styled-components";
import { PlaneDivInterface, PlaneInterface, PlaneSliceInterface } from "../types/types";

const PlaneDiv = styled.div<PlaneDivInterface>`
background-color: ${({backgroundColor}) => backgroundColor};
border-color: black;
border-style: solid;
border-width: 0.1rem;
height: 50%;
left: ${({left}) => left}%;
overflow: hidden;
position: absolute;
top: ${({top}) => top}%;
width: 50%;
`;

const LogoSlice = styled.div<PlaneSliceInterface>`
align-items: center;
display: flex;
height: 100vh;
justify-content: center;
left: -${({left}) => left}vw;
padding: 5%;
position: absolute;
top: -${({top}) => top}vh;
width: 100vw;
`;

const Plane = ({top, left, backgroundColor, ...props}: PlaneInterface) => (
    <PlaneDiv as={motion.div} top={top} left={left} backgroundColor={backgroundColor} {...props}>
        <LogoSlice top={top} left={left}>
            <LogoWhite width={`${window.innerWidth}px`} height={`${window.innerHeight}px`}/>
        </LogoSlice>
    </PlaneDiv>
    )

export default Plane;