import styled from "styled-components";

export const ProductDetailsHeroStyles = styled.section`
  grid-column: col-start 1 / col-end 8;
  display: grid;
  grid-template-columns: repeat(8, minmax(13rem, auto));

  padding: 6rem 2rem 24rem 2rem;
  align-items: center;
`;

export const ProductDetailsHeroText = styled.div`
  grid-column: 1 / span 4;

  display: grid;
  grid-template-rows: repeat(3, max-content);
  row-gap: 1rem;
  width: 51.2rem;
  height: 16rem;

  padding: 5rem 0 0 2rem;
`;

export const ProductDetailsHeroParagraphGold = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gold.four};
`;

export const ProductDetailsHeroHeader = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.headers.h2};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white.one};
`;

export const ProductDetailsHeroParagraphGrey = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.grey.two};
  padding-right: 22rem;
`;

export const ProductDetailsHeroImage = styled.div`
  grid-column: 5 / span 4;

  display: grid;
  grid-template-columns: repeat(2, max-content);
  column-gap: 5rem;
  width: 57.5rem;
  height: 54.363rem;

  justify-items: center;
  align-items: center;

  padding-left: 4rem;

  div {
    display: grid;
    grid-template-columns: repeat(4, max-content);
    column-gap: 1rem;
    justify-self: end;
    align-self: center;
    margin-top: 20rem;

    div {
      background-color: ${({ theme }) => theme.colors.gold.two};
      width: 1.1rem;
      height: 1.1rem;
      border-radius: 50%;
    }
  }
`;

export const ProductDetailsWatchImage = styled.img`
  width: 37.5rem;
  height: 49.397rem;
`;
