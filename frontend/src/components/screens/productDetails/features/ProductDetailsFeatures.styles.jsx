import styled from "styled-components";

export const ProductDetailsFeaturesStyles = styled.div`
  grid-column: col-start 1 / col-end 8;
  display: grid;
  grid-template-rows: repeat(3, max-content);
  row-gap: 1.5rem;
  margin-bottom: 9rem;
`;

export const ProductDetailsFeaturesHeader = styled.h5`
  font-size: ${({ theme }) => theme.fontSizes.headers.h6};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white.one};
  letter-spacing: 0.12rem;
  justify-self: center;
`;

export const ProductDetailsFeaturesParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.grey.two};
  justify-self: center;
  padding: 0 35rem 0 35rem;
  text-align: center;
  margin-bottom: 5rem;
`;

export const ProductDetailsFeaturesPartsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(37rem, 1fr));
  column-gap: 2rem;
`;

export const ProductDetailsFeaturesContentGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(3, max-content);
  row-gap: 1.5rem;
  width: 37rem;
  height: 45.4rem;
`;

export const ProductDetailsFeaturesImage = styled.img`
  width: 37rem;
  height: 37rem;
`;

export const ProductDetailsFeaturesImageHeader = styled.h5`
  font-size: ${({ theme }) => theme.fontSizes.headers.h6};
  color: ${({ theme }) => theme.colors.white.one};
  letter-spacing: 0.12rem;
  text-transform: uppercase;
`;

export const ProductDetailsFeaturesImageParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
  color: ${({ theme }) => theme.colors.grey.two};
  margin-top: -1rem;
`;
