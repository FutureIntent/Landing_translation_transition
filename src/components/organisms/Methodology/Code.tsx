import { Tabs } from 'antd';
import { StaticImage } from 'gatsby-plugin-image';

import Typography from '@components/atoms/Typography';

import MethodologyTab from '@components/organisms/Methodology/MethodologyTab';

const Code = () => {
    const CodeCards = [
        {
            title: 'Architectural planning',
            poster: (
                <StaticImage
                    loading="eager"
                    src="../../../assets/images/methodology/code.png"
                    alt="bg"
                />
            ),
            heading:
                'When the final understanding and final look of the product is done, developer team decides how to manage code architecture.',
            text: 'Main is is understanding of what tools fit best to provide best and stable work for particular product’s segment and features.',
        },
        {
            title: 'Development',
            poster: (
                <StaticImage
                    loading="eager"
                    src="../../../assets/images/methodology/code.png"
                    alt="bg"
                />
            ),
            heading:
                'Both backend and frontend teams start doing their parts in collaboration with each other and design team as well.',
            text: 'Work is split on checkpoints, and each part of the resource is made in order, to make sure each designed user-flow works completely from a to z. ',
        },
        {
            title: 'Testing',
            poster: (
                <StaticImage
                    loading="eager"
                    src="../../../assets/images/methodology/code.png"
                    alt="bg"
                />
            ),
            heading:
                'Testing is made both for each checkpoint (part of the project) and also in pre-final assembled version of the product.',
            text: 'It is made to make sure all given tools and design solutions works fine locally. Also to check work on all devices, operational systems, and resolutions with short loading times and without bugs.',
        },
    ];

    return (
        <div>
            <Typography variant="h2" color="light.grey" transformText="uppercase">
                Code
            </Typography>

            <Tabs
                hideAdd
                items={CodeCards.map((card) => ({
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

export default Code;
