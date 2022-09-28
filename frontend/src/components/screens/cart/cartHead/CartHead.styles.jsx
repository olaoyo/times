import styled from "styled-components";

export const CartHeadStyles = styled.div`
  grid-column: col-start 1 / col-end 8;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(2, min-content);
  padding-top: 6.5rem;

  color: ${({ theme }) => theme.colors.gold.four};
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p1};
  font-weight: 500;
  text-transform: uppercase;

  &::after {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-column: 1 / span 8;

    content: "";
    display: block;
    width: 119.2rem;
    height: .1rem;
    display: block;
    background: ${({ theme }) => theme.colors.gold.five};
    margin: 1rem 0 0 0;
  }
`;

export const CartProduct = styled.p`
  grid-column: 1 / span 3;
  padding: 0 0 0 3rem;
`;

export const CartUnitPrice = styled.p`
  grid-column: 4 / span 1;
  justify-self: center;
`;

export const CartQuantity = styled.p`
  grid-column: 6 / span 1;
  justify-self: center;
`;

export const CartPrice = styled.p`
  grid-column: 7 / span 1;
  justify-self: center;
  padding-left: 14rem;
`;
