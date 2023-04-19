import { motion } from 'framer-motion';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Typography from '@components/atoms/Typography';
import { useTranslation } from 'gatsby-plugin-react-i18next';

export type IAnchor = {
    title: string;
    link: string;
};

const PageNav = styled(motion.ul)`
    display: flex;

    li {
        p {
            transform: scale(1, 1);
            transition: transform 0.4s ease, color 0.4s ease;
        }
        &:hover {
            cursor: pointer;

            p {
                color: ${({ theme }) => theme.colors.light.accent}BF;
                transform: scale(1.05, 1.05);
            }
        }

        &:not(:last-of-type) {
            margin-right: 1rem;
        }
    }
`;

const PageNavigation = () => {

    const {t} = useTranslation();

    return(
        <>
            <PageNav>
                <li>
                    <Link to="/">
                        <Typography variant="paragraph" color="commons.white" transformText="uppercase">
                            {t('header.home')}
                        </Typography>
                    </Link>
                </li>

                <li>
                    <Link to="/works">
                        <Typography variant="paragraph" color="commons.white" transformText="uppercase">
                            {t('header.works')}
                        </Typography>
                    </Link>
                </li>

                <li>
                    <Link to="/company">
                        <Typography variant="paragraph" color="commons.white" transformText="uppercase">
                            {t('header.company')}
                        </Typography>
                    </Link>
                </li>

                <li>
                    <Link to="/careers">
                        <Typography variant="paragraph" color="commons.white" transformText="uppercase">
                            {t('header.careers')}
                        </Typography>
                    </Link>
                </li>

                <li>
                    <Link to="/contacts">
                        <Typography variant="paragraph" color="commons.white" transformText="uppercase">
                            {t('header.contacts')}
                        </Typography>
                    </Link>
                </li>
            </PageNav>
        </>
    );
}

export default PageNavigation;