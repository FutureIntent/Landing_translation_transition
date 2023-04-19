import styled from 'styled-components';
import { space, SpaceProps, textAlign, TextAlignProps } from 'styled-system';

import { fontsConfig } from '@components/atoms/Typography/Typography';

const Terms = styled.p<TextAlignProps & SpaceProps>`
    ${{ ...fontsConfig.caption }};
    color: ${({ theme }) => theme.colors.light.greyLight};
  max-width: 340px;
    ${textAlign};
    ${space};

    span {
        color: ${({ theme }) => theme.colors.light.accent};
    }
`;

export default Terms;
