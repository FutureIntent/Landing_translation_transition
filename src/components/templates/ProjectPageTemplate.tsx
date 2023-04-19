import Branding from '@components/sections/Project/Branding';
import Business from '@components/sections/Project/Business';
import DesignStage from '@components/sections/Project/DesignStage';
import FigmaCover from '@components/sections/Project/FigmaCover';
import FinalResult from '@components/sections/Project/FinalResult';
import FinalResultSlider from '@components/sections/Project/FinalResultSlider';
import HeroBanner from '@components/sections/Project/HeroBanner';
import Intro from '@components/sections/Project/Intro';
import Solution from '@components/sections/Project/Solution';
import UiKit from '@components/sections/Project/UiKit';
import { PageContext } from 'gatsby/internal';
import styled from 'styled-components';

import colors from '@theme/configs/colors';

import Box from '@components/atoms/Box';
import Typography from '@components/atoms/Typography';

import Footer from '@components/templates/Footer';

const WhiteBg = styled.div`
    background-color: ${({ theme }) => theme.colors.light.f6f6};
`;

export const GradientBg = styled(Box)`
    background: ${({ theme }) => theme.colors.gradient.background};
`;

const ProjectPage = ({ pageContext }: PageContext) => {
    const title = pageContext.data.title.text;
    const { categories } = pageContext.data;
    const blocks: any = {};

    pageContext.data.body.forEach((block: any) => {
        blocks[block.slice_type] = block;
    });

    if (!Object.keys(blocks).length) {
        return (
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                backgroundColor={colors.light.black}
                width="100vw"
                height="100vh"
            >
                <Typography variant="h1" color="light.grey">
                    Coming soon...
                </Typography>{' '}
            </Box>
        );
    }

    return (
        <>
            {blocks.hero_banner && (
                <HeroBanner data={blocks.hero_banner} title={title} categories={categories} />
            )}
            {blocks.intro && <Intro data={blocks.intro} />}
            <GradientBg>
                {blocks.business && <Business data={blocks.business} />}
                {blocks.solution_specialists && blocks.solution_technologies && (
                    <Solution
                        specialists={blocks.solution_specialists}
                        technologies={blocks.solution_technologies}
                    />
                )}
            </GradientBg>
            <WhiteBg>
                {blocks.branding_slider && title && (
                    <Branding slider={blocks.branding_slider} title={title} />
                )}
                {blocks.design_stage && <DesignStage data={blocks.design_stage} />}
                {blocks.figma_design && <FigmaCover data={blocks.figma_design} />}
                {blocks.uikit && <UiKit data={blocks.uikit} />}
                {blocks.full_result &&
                    blocks.full_result_works_done &&
                    blocks.full_result_achievements && (
                        <FinalResult
                            data={blocks.full_result}
                            worksDone={blocks.full_result_works_done}
                            achievements={blocks.full_result_achievements}
                        />
                    )}
            </WhiteBg>
            <GradientBg pb="var(--footer-height)">
                {blocks.full_block_slider && <FinalResultSlider data={blocks.full_block_slider} />}
                {/* <OtherWorks /> */}
                <Footer id="footer" />
            </GradientBg>
        </>
    );
};

export default ProjectPage;