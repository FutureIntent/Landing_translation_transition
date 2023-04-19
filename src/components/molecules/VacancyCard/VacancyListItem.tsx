import {IVacancy} from "@interfaces/Career";
import Hr from "@components/atoms/Hr";
import VacancyCard from "@components/molecules/VacancyCard/VacancyCard";
// eslint-disable-next-line import/no-extraneous-dependencies
import { nanoid } from "nanoid";
import styled from "styled-components";

const VacancyWrapper = styled.div<{ isShown: boolean}>`
    align-items: center;
  display: flex;
  flex-direction: column;
  height: auto;
  opacity: ${({ isShown }) => isShown ? 1 : 0 };
  overflow: hidden;
  transition: max-height 0.4s ease-in-out, opacity 0.4s ease-in-out;
  width: 100%;
`;


const VacancyListItem = ({ vacancy, selected, index }: { vacancy: IVacancy, selected: string[], index: number}) => {
    const isShown = selected.includes(vacancy.category) || selected.length === 0;
    const maxHeight = isShown ? 10000 : 0;

    return (
        <VacancyWrapper key={vacancy.title} style={{ maxHeight: `${maxHeight}px` }} isShown={isShown}>
            {index !== 0 && <Hr />}
            <VacancyCard vacancy={vacancy} key={nanoid()} />
        </VacancyWrapper>
    )
}

export default VacancyListItem;
