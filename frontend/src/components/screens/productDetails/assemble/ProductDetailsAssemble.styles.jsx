import styled from "styled-components";

export const ProductDetailsAssembleStyles = styled.div`
  grid-column: col-start 1 / col-end 8;
  display: grid;
  grid-template-columns: repeat(2, max-content);
  column-gap: 6rem;

  width: 117.1rem;
  height: 48.8rem;
  /* margin-top: 18.5rem; */
  margin: 18.5rem 0 10rem 0;
`;

export const ProductDetailsAssembleImage = styled.img`
  width: 60rem;
  height: 48.8rem;
`;

export const ProductDetailsAssembleText = styled.div`
  display: grid;
  grid-template-rows: repeat(3, max-content);
  row-gap: 4rem;
  width: 51.2rem;
  height: 37.4rem;
  align-self: center;
`;

export const ProductDetailsAssembleHeader = styled.h2`
  width: 32.2rem;
  height: 11.4rem;
  font-size: ${({ theme }) => theme.fontSizes.headers.h2};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white.one};
`;

export const ProductDetailsAssembleParagraph = styled.p`
  width: 51.2rem;
  height: 11.1rem;
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.grey.two};
`;

export const ProductDetailsAssembleButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  align-items: center;

  span {
    font-size: ${({ theme }) => theme.icons.large.xxl};
    color: ${({ theme }) => theme.colors.gold.four};
    margin-left: -2rem;
  }
`;

export const ProductDetailsAssembleButton = styled.button`
  width: 20rem;
  height: 7rem;
  color: ${({ theme }) => theme.colors.gold.four};
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p1};
  font-weight: 600;
  border: 3px solid ${({ theme }) => theme.colors.gold.four};
  background: ${({ theme }) => theme.colors.black.three};
  letter-spacing: 0.12rem;
`;
