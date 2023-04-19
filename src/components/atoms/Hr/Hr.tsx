import styled from 'styled-components';

import Box from '@components/atoms/Box';
import Typography from '@components/atoms/Typography';
import {space, SpaceProps} from "styled-system";

const StyledHr = styled.hr<SpaceProps>`
    background-color: ${({ theme }) => theme.colors.light.greyLight};
    border: 0;
    height: 1px;
    width: 100%;
  ${space};
`;

const Hr = ({ text, ...rest }: { text?: string } & SpaceProps) => (
    <Box display="flex" flexWrap="nowrap" alignItems="center" width="100%">
        <StyledHr {...rest} />
        {Boolean(text) && (
            <>
                <Typography variant="paragraph" color="light.mediumGrey" px="10px">
                    {text}
                </Typography>
                <StyledHr {...rest} />
            </>
        )}
    </Box>
);

export default Hr;
