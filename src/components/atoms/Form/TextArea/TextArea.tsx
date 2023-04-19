import { hexToRGB } from '@utils/helpers';
import { ForwardedRef, forwardRef } from 'react';
import styled from 'styled-components';

import colors from '@theme/configs/colors';
import mediaQueries from '@theme/configs/mediaQueries';

import Box from '@components/atoms/Box';
import { StyledLabel, StyledLabelText } from '@components/atoms/Form/Label/Label';
import Typography from '@components/atoms/Typography';
import { fontsConfig } from '@components/atoms/Typography/Typography';

const StyledTextArea = styled.textarea`
    background-color: rgba(${hexToRGB(colors.light.black)}, 0.75);
    ${{ ...fontsConfig.paragraph }};
    color: ${({ theme }) => theme.colors.commons.white};
    line-height: 15px;
    min-height: 50px;
    overflow: hidden;
    padding: 21px 20px 8px;

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
        -webkit-box-shadow: 0 0 0 30px ${({ theme }) => theme.colors.light.black} inset !important;
        -webkit-text-fill-color: ${({ theme }) => theme.colors.commons.white} !important;
    }

    ${mediaQueries.tablet} {
        line-height: 21px;
    }

    ~ ${StyledLabel}
        ${StyledLabelText},
        &:not(:placeholder-shown)
        ~ ${StyledLabel}
        ${StyledLabelText} {
        color: ${({ theme }) => theme.colors.light.grey};
        ${{ ...fontsConfig.accent }};
    }

    &:focus
        ~ ${StyledLabel}
        ${StyledLabelText},
        &:not(:placeholder-shown)
        ~ ${StyledLabel}
        ${StyledLabelText} {
        transform: translateY(4px);
    }
`;

const TextArea = (
    { label, name, error, ...rest }: { label: string; name: string; error?: string },
    ref: ForwardedRef<HTMLTextAreaElement>,
) => (
    <Box display="flex" flexDirection="column" position="relative">
        <StyledTextArea placeholder=" " name={name} ref={ref} {...rest} rows={3} />
        <StyledLabel htmlFor={name}>
            <StyledLabelText>{label}</StyledLabelText>
        </StyledLabel>
        {!!error && (
            <Typography variant="caption" color="light.negative">
                {error}
            </Typography>
        )}
    </Box>
);

export default forwardRef(TextArea);
