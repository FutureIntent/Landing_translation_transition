import { Link } from 'gatsby';
import { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';
import { layout, space, variant as styledVariant } from 'styled-system';

import { ButtonProps } from '@components/atoms/Button/Button';

const variants = styledVariant({
    prop: 'variant',
    variants: {
        primary: {
            'color': 'commons.white',
            'backgroundColor': 'light.brandAccent',
            '&:hover': {
                backgroundColor: '#294FE5',
            },
            '&:disabled': {
                opacity: 0.32,
            },
        },
        secondary: {
            'color': 'light.brandAccent',
            'backgroundColor': 'transparent',
            'border': '1px solid #486DFF',
            '&:hover': {
                border: '1px solid #294FE5',
            },
            '&:disabled': {
                opacity: 0.32,
            },
        },
    },
});

const StyledLink = styled(Link).attrs((props: ButtonProps) => ({
    variant: props.variant || 'primary',
}))`
    border-radius: ${({ theme }) => theme.space.xs};
    flex-shrink: 0;
    padding: 15px 20px;
    ${variants};
    ${space};
    ${layout};

    white-space: nowrap;
`;

const LinkAsButton = ({
    to,
    variant = 'primary',
    children,
}: {
    to: string;
    variant?: 'primary' | 'secondary';
    children: ReactNode;
}): ReactElement => (
    <StyledLink variant={variant} to={to}>
        {children}
    </StyledLink>
);

export default LinkAsButton;
