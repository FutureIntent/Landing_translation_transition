import LogoWhite from "@components/molecules/Icons/LogoWhite";
import { motion } from "framer-motion";
import styled from "styled-components";
import { LogoDivInterface, LogoInterface } from "../types/types";

const LogoDiv = styled.div<LogoDivInterface>`
align-items: center;
background-color: ${({backgroundColor}) => backgroundColor};
clip-path: ${({clipPath}) => clipPath};
display: flex;
height: 100%;
justify-content: center;
padding: 5%;
position: absolute;
width: 100%;
`;

const Logo = ({clipPath, backgroundColor, ...props}: LogoInterface) => (
    <LogoDiv as={motion.div} clipPath={clipPath} backgroundColor={backgroundColor} {...props}>
        <LogoWhite width={`${window.innerWidth}px`} height={`${window.innerHeight}px`} />
    </LogoDiv>
    )


export default Logo;