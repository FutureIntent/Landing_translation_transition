import { Tabs } from 'antd';
import { StaticImage } from 'gatsby-plugin-image';

import Typography from '@components/atoms/Typography';

import MethodologyArrow from '@components/molecules/Icons/MethodologyArrow';

import MethodologyTab from '@components/organisms/Methodology/MethodologyTab';

const Strategy = () => {
    const StrategyCards = [
        {
            title: 'idea',
            poster: (
                <StaticImage
                    loading="eager"
                    src="../../../assets/images/methodology/strategyIdea.png"
                    alt="bg"
                />
            ),
            heading: 'All starts with the core idea of the project. What are your aims?',
            text: 'What you are trying to achieve? How your audience think and what they want? How you potentially could increase the conversion rate, user engagement and create perfect platform for your business? Right questions are the key to right  answers.',
        },
        {
            title: 'Business analysis',
            poster: (
                <StaticImage
                    loading="eager"
                    src="../../../assets/images/methodology/strategyIdea.png"
                    alt="bg"
                />
            ),
            heading:
                'As soon as we understand the concept of product and work we want to do — next step is the research.',
            text: 'Understanding the pros and cons of the concept, problematic aspects of the idea, market features, user needs and analysis of given results to form more detailed vision of upcoming steps.',
        },
        {
            title: 'work plan',
            poster: (
                <StaticImage
                    loading="eager"
                    src="../../../assets/images/methodology/strategyIdea.png"
                    alt="bg"
                />
            ),
            heading:
                'The Analysis is done and we know not only what we want but also how to make product successful.',
            text: 'Now we create our upcoming strategy, finalize the vision and make a work plan for our team with understanding of what final result must be. ',
        },
    ];

    return (
        <div>
            <Typography variant="h2" color="light.grey" transformText="uppercase">
                strategy
            </Typography>

            <Tabs
                hideAdd
                tabBarExtraContent={{
                    left: <MethodologyArrow />,
                }}
                items={StrategyCards.map((card) => ({
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

export default Strategy;
