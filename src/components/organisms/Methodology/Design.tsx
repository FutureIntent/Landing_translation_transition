import { Tabs } from 'antd';
import { StaticImage } from 'gatsby-plugin-image';

import Typography from '@components/atoms/Typography';

import MethodologyTab from '@components/organisms/Methodology/MethodologyTab';

const Design = () => {
    const DesignCards = [
        {
            title: 'Research',
            poster: (
                <StaticImage
                    loading="eager"
                    src="../../../assets/images/methodology/design.png"
                    alt="bg"
                />
            ),
            heading:
                'Product, user, statistics and usability research is made to capture a more complete picture of our users.',
            text: 'Uncovering user insights and learning needs is crucial to build best user experience possible.',
        },
        {
            title: 'Prototyping',
            poster: (
                <StaticImage
                    loading="eager"
                    src="../../../assets/images/methodology/design.png"
                    alt="bg"
                />
            ),
            heading: 'It always comes from big picture to actual subject.',
            text: 'As soon as we analyse results from the research, designers start creating wireframes (very core structure of platform), test different practices, gain feedback and finally get to best-working formula in our product. ',
        },
        {
            title: 'Create guidelines',
            poster: (
                <StaticImage
                    loading="eager"
                    src="../../../assets/images/methodology/design.png"
                    alt="bg"
                />
            ),
            heading:
                'When the wireframes and prototypes are done and give us desired result, next step is to pack a product.',
            text: 'It gets final look, correct visual language, own unique style, visual design code, UI guidelines and brand book. In this step all designs as a structures inhale a soul and get the feel, emotion and atmosphere.',
        },
    ];

    return (
        <div>
            <Typography variant="h2" color="light.grey" transformText="uppercase">
                Design
            </Typography>

            <Tabs
                hideAdd
                items={DesignCards.map((card) => ({
                    label: card.title,
                    key: card.title,
                    children: (
                        <MethodologyTab
                            poster={card.poster}
                            heading={card.heading}
                            text={card.text}
                        />
                    ),
                }))}
            />
        </div>
    );
};

export default Design;
