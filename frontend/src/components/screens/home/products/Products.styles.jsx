import styled from "styled-components";

export const ProductCardListStyles = styled.div`
  grid-column: col-start 1 / col-end 8;

  display: grid;
  grid-template-rows: repeat(5, max-content);
  column-gap: 2rem;
  row-gap: 2rem;
  padding-bottom: 10rem;
`;

export const ProductHeader = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.headers.h5};
  color: ${({ theme }) => theme.colors.white.one};
  font-weight: 700;
  letter-spacing: 0.12rem;
  justify-self: center;
`;

export const ProductParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
  color: ${({ theme }) => theme.colors.grey.four};
  font-weight: 400;
  justify-self: center;
  text-align: center;
  padding: 0 35rem .75rem 35rem;
`;

export const ProductCategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  column-gap: 2rem;
  padding-top: 3rem;
  padding-bottom: 2rem;
`;

export const ProductCategoriesButton = styled.button`
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

export const ProductCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(37rem, 1fr));
  column-gap: 2rem;
  row-gap: 3rem;
  padding-top: 2rem;
  padding-bottom: 1.5rem;
`;

export const ProductButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  justify-self: center;
  align-items: center;
  padding-top: 5rem;
  padding-bottom: 10rem;

  span {
    font-size: ${({ theme }) => theme.icons.large.xxl};
    color: ${({ theme }) => theme.colors.gold.four};
    margin-left: -2rem;
  }
`;

export const ProductButton = styled.button`
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
