import styled from "styled-components";

export const StatsStyles = styled.div`
  grid-column: col-start 1 / col-end 8;
  display: grid;

  grid-template-columns: repeat(3, max-content);
  column-gap: 3rem;
  padding-left: 2.3rem;
  padding-bottom: 9rem;
`;

export const StatsModel = styled.img`
  width: 31.2rem;
  height: 50.8rem;
  justify-self: center;
`;

export const StatsWatch = styled.img`
  width: 31.2rem;
  height: 50.8rem;
  justify-self: center;
`;

export const StatsDetails = styled.div`
  display: grid;
  grid-template-rows: repeat(4, max-content);
  row-gap: 2rem;

  width: 43.9rem;
  height: 38.9rem;
  align-self: center;
`;

export const StatsHeader = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.headers.h3};
  color: ${({ theme }) => theme.colors.white.one};
  font-weight: 800;
  padding-right: 2rem;
`;

export const StatsDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
  color: ${({ theme }) => theme.colors.grey.two};
  font-weight: 400;
`;

export const StatsFigures = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const StatsFiguresGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
`;

export const StatsFiguresNumbers = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.headers.h2};
  color: ${({ theme }) => theme.colors.gold.two};
  font-weight: 800;
`;

export const StatsFiguresText = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
  color: ${({ theme }) => theme.colors.gold.one};
  font-weight: 500;
`;

export const StatsButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  align-items: center;

  span {
    font-size: ${({ theme }) => theme.icons.large.xxl};
    color: ${({ theme }) => theme.colors.gold.four};
    margin-left: -2rem;
  }
`;

export const StatsButton = styled.button`
  width: 22.7rem;
  height: 7rem;
  color: ${({ theme }) => theme.colors.gold.four};
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
  font-weight: 600;
  letter-spacing: 0.12rem;
  border: 3px solid ${({ theme }) => theme.colors.gold.four};
  background: ${({ theme }) => theme.colors.black.three};
`;
