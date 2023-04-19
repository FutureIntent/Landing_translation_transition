// eslint-disable-next-line import/no-extraneous-dependencies
import { Vacancies } from '@utils/dummyData';
import { getClampValue, hexToRGB } from '@utils/helpers';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { useState } from 'react';
import styled from 'styled-components';

import ModalProvider from '@providers/ModalProvider';

import { useModal } from '@hooks';

import colors from '@theme/configs/colors';

import Box from '@components/atoms/Box';
import Container from '@components/atoms/Container';
import Typography from '@components/atoms/Typography';

import VacancyListItem from '@components/molecules/VacancyCard/VacancyListItem';

import Footer from '@components/templates/Footer';
import Transition from '@components/templates/Transition/transition';
import Layout from '@components/templates/Layout';
import Header from '@components/templates/Header';

const tags = ['coding', 'design', 'marketing', 'other'];

const FilterTag = styled.div`
    background-color: ${({ theme }) => `rgba(${hexToRGB(theme.colors.light.black)}, .45)`};
    border-radius: 2px;
    padding: ${getClampValue('5px', '9px')} ${getClampValue('10px', '15px')};

    &:hover {
        cursor: pointer;
    }

    &:not(:last-of-type) {
        margin-right: ${getClampValue('2px', '5px')};
    }

    &.selected {
        background-color: ${({ theme }) => `rgba(${hexToRGB(theme.colors.light.black)}, .9)`};
        position: relative;

        &:before {
            background-color: ${({ theme }) => `rgba(${hexToRGB(theme.colors.light.accent)}, .9)`};
            content: '';
            height: 100%;
            left: 0;
            position: absolute;
            top: 0;
            width: 1px;
        }
    }
`;

const Careers = ({ data }) => {
    const [selected, setSelected] = useState<string[]>([]);

    const isSelected = (tag: string) => selected.find((selectedTag) => selectedTag === tag);
    const selectAll = () => setSelected([]);

    const toggleFilter = (tag: string) => {
        const isFound = selected.find((oldTag) => oldTag === tag);

        if (isFound) {
            const newValue = selected.filter((oldTag) => oldTag !== tag);

            setSelected(newValue);
        } else {
            setSelected([...selected, tag]);
        }
    };

    const bgImg = data.img.childImageSharp.fluid || null;

    return (
        <Layout>
            <Header />
            <ModalProvider>
                <Transition backgroundColor='MediumVioletRed' shortened/>
                <section>
                    <Box height={{ _: 300, tablet: 660 }} width="100%">
                        <BackgroundImage style={{ width: '100%', height: '100%' }} fluid={bgImg}>
                            <Container>
                                <Box
                                    pl={{ _: '0', tablet: getClampValue('0px', '140px') }}
                                    pt={{ _: 110, tablet: 200 }}
                            >
                                    <Typography
                                        variant="h1"
                                        color="light.grey"
                                        transformText="uppercase"
                                >
                                        Careers
                                    </Typography>

                                    <Typography
                                        variant="h4"
                                        color="light.greyDark"
                                        transformText="uppercase"
                                >
                                        Categories
                                    </Typography>
                                    <Box display="flex" mt={6}>
                                        <FilterTag
                                            className={selected.length < 1 ? 'selected' : ''}
                                            onClick={selectAll}
                                    >
                                            <Typography
                                                variant="caption"
                                                color="light.grey"
                                                transformText="uppercase"
                                        >
                                                All
                                            </Typography>
                                        </FilterTag>
                                        {tags.map((tag) => (
                                            <FilterTag
                                                key={tag}
                                                onClick={() => toggleFilter(tag)}
                                                className={isSelected(tag) && 'selected'}
                                        >
                                                <Typography
                                                    variant="caption"
                                                    color="light.grey"
                                                    transformText="uppercase"
                                            >
                                                    {tag}
                                                </Typography>
                                            </FilterTag>
                                    ))}
                                    </Box>
                                </Box>
                            </Container>
                        </BackgroundImage>
                    </Box>
                    <Box
                        height="100%"
                        width="100%"
                        backgroundColor={colors.light.greyBg}
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        mb="var(--footer-height)"
                >
                        {Vacancies.map((vacancy, index) => (
                            <VacancyListItem
                                key={vacancy.title}
                                vacancy={vacancy}
                                index={index}
                                selected={selected}
                        />
                    ))}
                    </Box>
                </section>
                <Footer />
            </ModalProvider>
        </Layout>
    );
};

export default Careers;

export const query = graphql`
query ($language: String!){
    img: file(relativePath: { eq: "careers_bg.png" }) {
        childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
            }
        }
    },
    locales: allLocale(filter: {ns: {in: ["home", "header"]}, language: {eq: $language}}) {
        edges {
          node {
            ns
            data
            language
          }
        }
    }
}
`;