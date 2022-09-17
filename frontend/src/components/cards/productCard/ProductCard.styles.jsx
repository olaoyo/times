import styled from "styled-components";

export const Card = styled.article`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  width: 37rem;
  height: 51.2rem;
  background-color: ${({ theme }) => theme.colors.black.two};
`;

export const CardImage = styled.img`
  width: 37rem;
  height: 28.6rem;
`;

export const CardDetails = styled.div`
  display: grid;
  grid-template-rows: repeat(3, max-content);
  row-gap: 2.2rem;
`;

export const WatchNameAndPrice = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
  color: ${({ theme }) => theme.colors.white.one};
  font-weight: 700;
  padding: 2rem 2rem 0 2rem;
`;

export const WatchName = styled.p`
  justify-self: start;
`;

export const WatchPrice = styled.p`
  justify-self: end;
`;

export const WatchDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
  color: ${({ theme }) => theme.colors.grey.two};
  font-weight: 400;
  padding: 0 2rem 0 2rem;
`;

export const Buttons = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  padding: 0 1rem 0 1rem;
`;

export const BuyNowButton = styled.button`
  width: 15.4rem;
  height: 5.4rem;
  color: ${({ theme }) => theme.colors.black.three};
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
  font-weight: 600;
  letter-spacing: .12rem;
  border: none;
  background: linear-gradient(
    261.88deg,
    ${({ theme }) => theme.colors.gold.two} -5.03%,
    ${({ theme }) => theme.colors.gold.three} 98.82%
  );
`;

export const AddToCartButton = styled.button`
  width: 15.4rem;
  height: 5.4rem;
  color: ${({ theme }) => theme.colors.gold.four};
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
  font-weight: 600;
  letter-spacing: .12rem;
  border: 3px solid ${({ theme }) => theme.colors.gold.four};
  background: ${({ theme }) => theme.colors.black.two};
`;
