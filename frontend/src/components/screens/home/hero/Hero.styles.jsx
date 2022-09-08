import styled from "styled-components";

export const HeroStyles = styled.section`
  grid-column: col-start 1 / col-end 8;
  display: grid;
  grid-template-columns: repeat(8, minmax(13rem, auto));

  padding: 6rem 2rem 24rem 2rem;
  align-items: center;
`;

export const HeroText = styled.div`
  grid-column: 1 / span 4;

  display: grid;
  grid-template-rows: repeat(3, max-content);
  row-gap: 3rem;
  padding-left: 2rem;
`;

export const HeroHeader = styled.div`
  display: grid;
  grid-template-rows: repeat(3, max-content);
  line-height: ${({ theme }) => theme.lineHeights.headers.l1};
`;

export const HeroHeaderText = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.headers.h1};
  color: ${({ theme }) => theme.colors.white.one};
`;

export const HeroParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
  color: ${({ theme }) => theme.colors.grey.two};
  padding-right: 12rem;
`;

export const HeroButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  align-items: center;

  span {
    font-size: ${({ theme }) => theme.icons.large.xxl};
    color: ${({ theme }) => theme.colors.gold.four};
    margin-left: -2rem;
  }
`;

export const HeroButton = styled.button`
  width: 15.4rem;
  height: 5.4rem;
  color: ${({ theme }) => theme.colors.gold.four};
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
  font-weight: 600;
  border: 3px solid ${({ theme }) => theme.colors.gold.four};
  background: ${({ theme }) => theme.colors.black.two};
`;

export const HeroImage = styled.div`
  grid-column: 5 / span 4;

  display: grid;
  grid-template-rows: repeat(3, max-content);
  row-gap: 2rem;
  padding-right: 2rem;
`;

export const HeroImageWatch = styled.img`
  width: 42.2rem;
  height: 39.3rem;
  justify-self: end;
`;

export const HeroImagePriceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-top: 1rem;

  p {
    font-size: ${({ theme }) => theme.fontSizes.paragraphs.p1};
    color: ${({ theme }) => theme.colors.white.one};
    font-weight: 700;
    justify-self: center;
    align-self: center;
  }

  div {
    display: grid;
    grid-template-columns: repeat(4, max-content);
    column-gap: 1rem;
    justify-self: end;
    align-self: center;

    div {
      background-color: ${({ theme }) => theme.colors.gold.two};
      width: 1.1rem;
      height: 1.1rem;
      border-radius: 50%;
    }
  }
`;

export const HeroImageWatchNameGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr min-content;

  span {
    font-size: ${({ theme }) => theme.icons.large.l};
    color: ${({ theme }) => theme.colors.white.one};
    justify-self: end;
    align-self: center;
  }
`;

export const HeroImageWatchName = styled.h4`
  color: ${({ theme }) => theme.colors.white.one};
  font-size: ${({ theme }) => theme.fontSizes.headers.h5};
  justify-self: center;
  padding-left: 3rem;

`
