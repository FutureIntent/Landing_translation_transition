import Box from "@components/atoms/Box";
import IconWithText from "@components/molecules/IconWithText/IconWithText";
import Soldiers from "@components/molecules/Icons/Soldiers";
import React from "react";
import Rocket from "@components/molecules/Icons/Rocket";
import Flashlight from "@components/molecules/Icons/Flashlight";
import Container from "@components/atoms/Container";
import Section from "@components/atoms/Section";


const InfoBlock = () => (
    <Section fullScreen={false}>
        <Container maxWidth="1520px">
            <Box display="flex" justifyContent="space-between" p="65px 0 180px" flexDirection={{ _: 'column', tablet: 'row'}}>
                <IconWithText icon={<Soldiers size="xxxl" />} text="6 Specialists + outsource" />
                <IconWithText icon={<Rocket size="xxxl" />} text="10 projects launched" />
                <IconWithText icon={<Flashlight size="xxxl" />} text="∞ Ideas & Solutions" />
            </Box>
        </Container>
    </Section>
    );

export default InfoBlock;
