import { useState } from 'react';
import styled from 'styled-components';

import mediaQueries from '@theme/configs/mediaQueries';

import Container from '@components/atoms/Container';

import CollapsableItem from '@components/molecules/SectionNavigation/CollapsableItem';

const sections = [
    {
        label: 'intro',
        anchor: 'intro',
    },
    {
        label: 'solutions',
        anchor: 'solutions',
    },
    {
        label: 'services',
        anchor: 'services',
    },
    {
        label: 'methodology',
        anchor: 'methodology',
    },
    {
        label: 'works',
        anchor: 'our-works',
    },
    {
        label: 'specialists',
        anchor: 'specialists',
    },
    {
        label: 'contacts',
        anchor: 'contact-us',
    },
];

const PageNavigation = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    position: fixed;
    right: var(--container-padding-x);
    z-index: 490;

    ${mediaQueries.tablet} {
        left: var(--container-padding-x);
        right: unset;
    }

    ${mediaQueries.xxl} {
        left: calc((100vw - 1920px) / 2 + var(--container-padding-x));
    }
`;

const List = styled.ul`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 22px;

    li {
        display: inline-block;
        width: 100%;
    }

    ${mediaQueries.tablet} {
        width: 40px;
    }
`;

const SectionNavigation = () => {
    const [activeSection, setActiveSection] = useState(0);

    const handleClick = (index: number) => {
        setActiveSection(index);
    };

    return (
        <Container isHomePage>
            <PageNavigation>
                <List>
                    {sections.map((section, index) => (
                        <CollapsableItem
                            key={section.anchor}
                            section={section}
                            index={index}
                            isOpen={activeSection === index}
                            onClick={() => handleClick(index)}
                        />
                    ))}
                </List>
            </PageNavigation>
        </Container>
    );
};

export default SectionNavigation;
