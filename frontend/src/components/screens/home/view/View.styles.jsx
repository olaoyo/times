import styled from "styled-components";

export const ViewAllStyles = styled.div`
  grid-column: col-start 1 / col-end 8;

  display: grid;
  grid-template-rows: repeat(5, max-content);
  column-gap: 2rem;
  row-gap: 2rem;
  padding: 2rem 0 10rem 0 ;
`;

export const ViewAllButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  justify-self: center;
  align-items: center;
  padding-top: 5rem;
  padding-bottom: 1.5rem;

  span {
    font-size: ${({ theme }) => theme.icons.large.xxl};
    color: ${({ theme }) => theme.colors.gold.four};
    margin-left: -2rem;
  }
`;

export const ViewAllButton = styled.button`
  width: 17.2rem;
  height: 7rem;
  color: ${({ theme }) => theme.colors.gold.four};
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
  font-weight: 600;
  letter-spacing: 0.12rem;
  border: 3px solid ${({ theme }) => theme.colors.gold.four};
  background: ${({ theme }) => theme.colors.black.three};
  justify-self: center;
`;
