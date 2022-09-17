import styled from "styled-components";

export const ProductDetailsDisplayStyles = styled.div`
  grid-column: col-start 1 / col-end 8;
  display: grid;

  grid-template-rows: repeat(4, max-content);
  row-gap: 3rem;
`;

export const ProductDetailsDisplayHeader = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.headers.h2};
  font-weight: 800;
  color: ${({ theme }) => theme.colors.gold.four};
`;

export const ProductDetailsDisplayParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p1};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.grey.four};
  margin-bottom: 1.6rem;
`;

export const ProductDetailsDisplayImage = styled.img``;

export const ProductDetailsDisplayCirclesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, max-content);
  column-gap: 1rem;
  margin-top: -1rem;
`;

export const ProductDetailsDisplayCircles = styled.div`
  background-color: ${({ theme }) => theme.colors.gold.two};
  width: 1.1rem;
  height: 1.1rem;
  border-radius: 50%;
`;
