import styled from 'styled-components';

const Tag = styled.div`
    align-items: center;
    background-color: ${({ theme }) => theme.colors.light.greyLight};
    border-radius: 2px;
    display: inline-flex;
    justify-content: center;
    padding: 10px 15px;

    > * {
        white-space: nowrap;
    }
`;

export default Tag;
