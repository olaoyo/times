import styled from "styled-components";

export const CategoryStyles = styled.div`
  grid-column: col-start 1 / col-end 8;

  display: grid;
  grid-template-rows: repeat(5, max-content);
  column-gap: 2rem;
  row-gap: 2rem;
  padding-bottom: 0.6rem;
`;

export const CategoryHeader = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.headers.h5};
  color: ${({ theme }) => theme.colors.white.one};
  font-weight: 700;
  letter-spacing: 0.12rem;
  justify-self: center;
`;

export const CategoryParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
  color: ${({ theme }) => theme.colors.grey.four};
  font-weight: 400;
  justify-self: center;
  text-align: center;
  padding: 0 35rem .75rem 35rem;
`;

export const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  column-gap: 2rem;
  padding-top: 3rem;
  padding-bottom: 2rem;
`;

export const CategoriesButton = styled.button`
  width: 20rem;
  height: 7rem;
  color: ${({ theme }) => theme.colors.gold.four};
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
  font-weight: 600;
  letter-spacing: 0.12rem;
  border: 3px solid ${({ theme }) => theme.colors.gold.four};
  background: ${({ theme }) => theme.colors.black.three};
  transition: all 0.5s;

  &:hover {
    width: 20rem;
    height: 7rem;
    color: ${({ theme }) => theme.colors.black.three};
    font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
    font-weight: 600;
    letter-spacing: 0.12rem;
    border: 3px solid ${({ theme }) => theme.colors.gold.four};
    background: ${({ theme }) => theme.colors.gold.four};
    cursor: pointer;
  }
`;