import styled from "styled-components";

export const DiscoverStyles = styled.div`
  grid-column: col-start 1 / col-end 8;

  display: grid;
  grid-template-columns: repeat(2, max-content);
  column-gap: 5rem;
  width: 117.1rem;
  height: 48.8rem;
  padding-bottom: 63rem;
`;

export const DiscoverImage = styled.img`
  width: 60rem;
  height: 48.8rem;
`;

export const DiscoverDetails = styled.div`
  display: grid;
  grid-template-rows: repeat(3, max-content);
  row-gap: 4rem;
  align-self: center;

  width: 51.2rem;
  height: 32rem;
`;

export const DiscoverHeader = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.headers.h3};
  color: ${({ theme }) => theme.colors.white.one};
  font-weight: 800;
  padding-right: 10rem;
`;

export const DiscoverDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
  color: ${({ theme }) => theme.colors.grey.two};
  font-weight: 400;
`;

export const DiscoverButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  align-items: center;

  span {
    font-size: ${({ theme }) => theme.icons.large.xxl};
    color: ${({ theme }) => theme.colors.gold.four};
    margin-left: -2rem;
  }
`;

export const DiscoverButton = styled.button`
  width: 22.7rem;
  height: 7rem;
  color: ${({ theme }) => theme.colors.gold.four};
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
  font-weight: 600;
  letter-spacing: 0.12rem;
  border: 3px solid ${({ theme }) => theme.colors.gold.four};
  background: ${({ theme }) => theme.colors.black.three};
`;