import { IVacancy } from '@interfaces/Career';
import { useState } from 'react';
import styled from 'styled-components';

import { useModal } from '@hooks';

import colors from '@theme/configs/colors';

import Box from '@components/atoms/Box';
import Form from '@components/atoms/Form/Form';
import Hr from '@components/atoms/Hr';
import Typography from '@components/atoms/Typography';

import ActionButton from '@components/molecules/ActionButton';
import ExpandableArrow from '@components/molecules/Icons/ExpandableArrow';
import InHouse from '@components/molecules/Icons/InHouse';
import RemoteWork from '@components/molecules/Icons/RemoteWork';
import Modal from '@components/molecules/Modal';

const StyledDetails = styled.div<{ isOpen: boolean }>`
    height: auto;
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
    overflow: hidden;
    padding-top: 50px;
    transition: max-height 0.4s ease-in-out, opacity 0.4s ease-in-out;
`;

const IconWrapper = styled.div<{ isOpen: boolean }>`
    background-color: ${({ isOpen }) => (isOpen ? colors.light.accent : 'transparent')};
    border-radius: 100%;
    height: 50px;
    position: absolute;
    right: 0;
    top: 0;
    transform: rotate(${({ isOpen }) => (isOpen ? '-180deg' : '0deg')});

    transform-origin: center center;
    transition: transform 0.2s ease-out, background-color 0.2s ease-out;
    width: 50px;

    svg path {
        ${({ isOpen }) =>
            isOpen &&
            `
        fill: #fff;
    `}
    }
`;

const VacancyCard = ({ vacancy }: { vacancy: IVacancy }) => {
    const { openModal, closeModal } = useModal('modalForm');
    const [isOpen, setIsOpen] = useState(false);
    const { category, title, description, workFrom, jobDetails } = vacancy;
    const maxHeight = isOpen ? 10000 : 0;

    const toggleDetails = () => setIsOpen((prev) => !prev);

    return (
        <Box maxWidth={900} p="60px 15px 123px" cursor="pointer">
            <Box maxWidth={745} position="relative" onClick={toggleDetails}>
                <IconWrapper isOpen={isOpen}>
                    <ExpandableArrow size="fullWidth" />
                </IconWrapper>
                <Typography variant="h4" color="light.grey">
                    {category}
                </Typography>
                <Typography variant="h3" color="light.black">
                    {title}
                </Typography>
                <Typography variant="paragraph" color="light.black" mt={10}>
                    {description}
                </Typography>
                <Box display="flex" mt={20}>
                    {workFrom.inHouse && (
                        <Box display="flex" alignItems="center" mr={40}>
                            <InHouse size="medium2" color="light.grey" />
                            <Typography variant="paragraph" color="light.grey" ml={10}>
                                In-house
                            </Typography>
                        </Box>
                    )}
                    {workFrom.remote && (
                        <Box display="flex" alignItems="center">
                            <RemoteWork size="medium2" color="light.grey" />
                            <Typography variant="paragraph" color="light.grey" ml={10}>
                                Remote
                            </Typography>
                        </Box>
                    )}
                </Box>
            </Box>

            <StyledDetails style={{ maxHeight: `${maxHeight}px` }} isOpen={isOpen}>
                <Hr />
                <Box display="flex" flexWrap="wrap" pt={50}>
                    <Box width={{ _: '100%', tablet: '33%' }}>
                        <Typography
                            variant="h4"
                            color="light.grey"
                            transformText="uppercase"
                            mb={10}
                        >
                            Experience
                        </Typography>
                        <Typography variant="paragraph" color="light.black">
                            {jobDetails.experience}
                        </Typography>

                        <Typography
                            variant="h4"
                            color="light.grey"
                            transformText="uppercase"
                            mt={40}
                        >
                            Required skills
                        </Typography>
                        {jobDetails.requiredSkills.map((skill) => (
                            <Typography key={skill} variant="paragraph" color="light.black">
                                {skill}
                            </Typography>
                        ))}

                        <Typography
                            variant="h4"
                            color="light.grey"
                            transformText="uppercase"
                            mt={40}
                            mb={10}
                        >
                            Languages
                        </Typography>
                        {jobDetails.languages.map((language) => (
                            <Typography key={language} variant="paragraph" color="light.black">
                                {language}
                            </Typography>
                        ))}
                    </Box>
                    <Box width={{ _: '100%', tablet: '66%' }}>
                        <Typography
                            variant="h4"
                            color="light.grey"
                            transformText="uppercase"
                            mb={10}
                        >
                            Skill requirements
                        </Typography>
                        {jobDetails.responsibilities.map((responsobility) => (
                            <Typography
                                key={responsobility}
                                variant="paragraph"
                                color="light.black"
                            >
                                {responsobility}
                            </Typography>
                        ))}

                        <Typography
                            variant="h4"
                            color="light.grey"
                            transformText="uppercase"
                            mt={45}
                            mb={10}
                        >
                            Skill requirements
                        </Typography>
                        {jobDetails.benefits.map((benefit) => (
                            <Typography key={benefit} variant="paragraph" color="light.black">
                                {benefit}
                            </Typography>
                        ))}

                        <Typography
                            variant="h4"
                            color="light.grey"
                            transformText="uppercase"
                            mt={45}
                            mb={10}
                        >
                            Prior similar work experience would be an advantage.
                        </Typography>

                        <Typography variant="paragraph" color="light.black">
                            {jobDetails.additionalInfo}
                        </Typography>

                        <Box display="flex" justifyContent="flex-end" mt={40}>
                            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                            {/* @ts-ignore */}
                            <ActionButton onClick={openModal} label="Apply now" withArrow />
                        </Box>
                    </Box>
                </Box>
            </StyledDetails>
            <Modal name="modalForm" onClose={closeModal} title={`Apply to ${title}`}>
                <Form fullWidthBtn />
            </Modal>
        </Box>
    );
};

export default VacancyCard;
