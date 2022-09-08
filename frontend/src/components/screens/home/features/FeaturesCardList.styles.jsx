import styled from "styled-components";

export const FeaturesStyles = styled.article`
  grid-column: col-start 1 / col-end 8;
  display: grid;
  grid-template-rows: repeat(3, max-content);
  row-gap: 2rem;

  padding-bottom: 10rem;
`;

export const FeaturesHeader = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.headers.h5};
  color: ${({ theme }) => theme.colors.white.one};
  font-weight: 700;
  letter-spacing: .12rem;
  justify-self: center;
`;

export const FeaturesParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
  color: ${({ theme }) => theme.colors.grey.four};
  font-weight: 400;
  justify-self: center;
  text-align: center;
  padding: 0 40rem;
`;

export const FeaturesCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(37rem, 1fr));
  column-gap: 2rem;
  padding-top: 2rem;
`;
