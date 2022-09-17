import styled from "styled-components";

export const ProductDetailsAlsoLikeStyles = styled.div`
  grid-column: col-start 1 / col-end 8;
  display: grid;
  grid-template-rows: repeat(2, max-content);
  row-gap: 1.5rem;
  margin-top: 8.5rem;
`;

export const ProductDetailsAlsoLikeHeader = styled.h5`
  font-size: ${({ theme }) => theme.fontSizes.headers.h6};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white.one};
  text-transform: uppercase;
  letter-spacing: 0.12rem;
  justify-self: center;
`;

export const ProductDetailsAlsoLikeParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.grey.two};
  justify-self: center;
  padding: 0 35rem 0 35rem;
  text-align: center;
  text-transform: capitalize;
  line-height: ${({ theme }) => theme.lineHeights.paragraphs.l1};
`;