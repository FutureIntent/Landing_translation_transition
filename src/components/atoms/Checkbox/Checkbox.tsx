import { useEffect, useState } from 'react';
import { useController } from 'react-hook-form';
import styled from 'styled-components';

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
    border: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`;

const Icon = styled.svg`
    fill: none;
    height: 15px;
    stroke: ${({ theme }) => theme.colors.light.accent};
    stroke-width: 2px;
    width: 15px;
`;

const StyledCheckbox = styled.div<{ checked: boolean; hasError: boolean }>`
    background: transparent;
    border: 1.5px solid
        ${({ theme, checked }) =>
            checked ? theme.colors.light.accent : theme.colors.light.greyDark};
    border-radius: 2px;
    display: inline-block;
    height: 16px;
    transition: all 150ms;
    width: 16px;

    ${({ hasError, theme }) =>
        hasError &&
        `
     border: 1px solid ${theme.colors.light.negative};
     `}

    &:hover {
        border: 1.5px solid ${({ theme }) => theme.colors.light.accent};
    }

    ${Icon} {
        visibility: ${({ checked }) => (checked ? 'visible' : 'hidden')};
    }
`;

const CheckboxContainer = styled.div`
    display: inline-block;
    margin-right: 15px;
    vertical-align: middle;
`;

const Checkbox = ({
    inputName,
    control,
    required = false,
}: {
    inputName: string;
    control: any;
    required?: boolean;
}) => {
    const {
        field,
        fieldState: { invalid },
    } = useController({
        name: inputName,
        control,
        rules: { required },
        defaultValue: '',
    });
    const [isChecked, setIsChecked] = useState(field.value);
    const handleClick = () => setIsChecked((prev: boolean) => !prev);

    useEffect(() => {
        field.onChange(isChecked);
    }, [isChecked, field]);

    return (
        <CheckboxContainer>
            <HiddenCheckbox
                checked={isChecked}
                onChange={(e) => field.onChange(e.target.checked)}
            />
            <StyledCheckbox hasError={invalid} checked={isChecked} onClick={handleClick}>
                <Icon viewBox="0 0 12 10">
                    <path
                        d="M1.5 5.5L4 8L10 2"
                        stroke="#486DFF"
                        strokeWidth="1.5"
                        strokeLinecap="square"
                    />
                </Icon>
            </StyledCheckbox>
        </CheckboxContainer>
    );
};

export default Checkbox;
