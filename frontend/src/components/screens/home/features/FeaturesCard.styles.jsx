import styled from "styled-components";

export const FeaturesCard = styled.article`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  width: 37rem;
  height: 48.6rem;
  background-color: ${({ theme }) => theme.colors.black.two};
`;

export const FeaturesCardImage = styled.img`
  width: 37rem;
  height: 22.1rem;
`;

export const FeaturesCardDetails = styled.div`
  display: grid;
  grid-template-rows: repeat(3, max-content);
  row-gap: 2rem;
`;

export const FeaturesDetailsAndArrow = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;

  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
  color: ${({ theme }) => theme.colors.white.one};
  font-weight: 700;
  padding: 0 2rem 0 2rem;

  span {
    font-size: ${({ theme }) => theme.icons.large.l};
    color: ${({ theme }) => theme.colors.white.one};
    justify-self: end;
    align-self: center;
  }
`;

export const FeaturesDetails = styled.p`
  justify-self: start;
  align-self: center;
`;

export const FeaturesDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
  color: ${({ theme }) => theme.colors.grey.two};
  font-weight: 400;
  padding: 0 2rem 0 2rem;
`;

export const FeaturesButton = styled.button`
  width: 32.2rem;
  height: 7rem;
  color: ${({ theme }) => theme.colors.gold.four};
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
  font-weight: 600;
  letter-spacing: .12rem;
  border: 3px solid ${({ theme }) => theme.colors.gold.four};
  background: ${({ theme }) => theme.colors.black.two};
  justify-self: center;
`;
