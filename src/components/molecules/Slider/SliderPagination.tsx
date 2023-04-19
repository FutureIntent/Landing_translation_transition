import { props as defaultProps } from '@styled-system/should-forward-prop';
import React, { ForwardedRef, forwardRef, PropsWithChildren } from 'react';
import styled from 'styled-components';

import Box from '@components/atoms/Box';

const StyledBox = styled(Box).withConfig({
    shouldForwardProp: (prop) => ![...defaultProps, 'bulletColor'].includes(String(prop)),
})<{ bulletColor?: string }>`
    display: flex;
    align-items: center;
    height: 2.5rem;
    justify-content: center;

    .bullet {
        background-color: ${({ bulletColor, theme }) => bulletColor ?? theme.colors.light.greyLight};
        border-radius: 50%;
        display: inline-block;
        height: 10px;
        width: 10px;
        text-align: center;
        line-height: 10px;
        color: var(--white);

        span {
            display: none;
        }

        &:not(:last-of-type) {
            margin-right: 12px;
        }

        &.swiper-pagination-bullet-active {
            background-color: ${({ theme }) => theme.colors.light.accent};
            border: 0;

            &.bullet-number {
                width: 2rem;
                height: 2rem;
                line-height: 2rem;

                span {
                    display: inline-block;
                }
            }
        }
    }
`;

const SliderPagination = (props: PropsWithChildren<any>, ref: ForwardedRef<HTMLElement>) => {
    const { children, ...rest } = props;

    return (
        <StyledBox ref={ref} {...rest}>
            {children}
        </StyledBox>
    );
};

export default forwardRef(SliderPagination);
