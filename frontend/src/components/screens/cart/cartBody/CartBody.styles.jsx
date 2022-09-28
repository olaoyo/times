import styled from "styled-components";

export const CartBodyStyles = styled.div`
  grid-column: col-start 1 / col-end 8;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(2, min-content);
  padding-top: 6.5rem;
  row-gap: 5.3rem;

  color: ${({ theme }) => theme.colors.gold.four};
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p1};
  font-weight: 500;
  text-transform: uppercase;

  &::after {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-column: 1 / span 8;
    align-items: center;

    content: "";
    display: block;
    width: 119.2rem;
    height: 0.1rem;
    display: block;
    background: ${({ theme }) => theme.colors.gold.five};
    margin: 1rem 0 0 0;
  }
`;

export const CartProductGrid = styled.div`
  grid-column: 1 / span 3;
  display: grid;
  grid-template-columns: repeat(2, max-content);
  column-gap: 3rem;
  justify-items: center;
  align-items: center;
`;

export const CartProductImage = styled.img`
  width: 18.5rem;
  height: 14.3rem;
`;

export const CartProductText = styled.p`
  color: ${({ theme }) => theme.colors.white.one};
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p1};
  font-weight: 500;
  text-transform: uppercase;
`;

export const CartUnitPrice = styled.h5`
  grid-column: 4 / span 1;
  color: ${({ theme }) => theme.colors.white.one};
  font-size: ${({ theme }) => theme.fontSizes.headers.h5};
  font-weight: 400;
  text-transform: uppercase;
  justify-self: center;
  align-self: center;
`;

export const CartQuantityGrid = styled.div`
  grid-column: 6 / span 1;

  display: grid;
  grid-template-columns: repeat(3, max-content);
  justify-self: end;
  align-self: center;
  padding-right: 2rem;
`;

export const CartQuantityChange = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  width: 4rem;
  height: 4rem;

  span {
    font-size: ${({ theme }) => theme.icons.medium.xxm};
    color: ${({ theme }) => theme.colors.gold.four};

    &:hover {
      cursor: pointer;
    }
  }
`;

export const CartQuantity = styled.h5`
  display: grid;
  justify-items: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  font-size: ${({ theme }) => theme.fontSizes.headers.h5};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.white.one};
`;

export const CartPrice = styled.p`
  grid-column: 7 / span 1;
  width: 13.9rem;
  height: 2.8rem;
  color: ${({ theme }) => theme.colors.white.one};
  font-size: ${({ theme }) => theme.fontSizes.headers.h5};
  font-weight: 400;
  text-transform: uppercase;
  justify-self: end;
  align-self: center;
  padding-left: 12rem;
`;

export const CartDeleteItem = styled.div`
  grid-column: 8 / span 1;
  display: grid;
  grid-template-columns: max-content 1fr;
  justify-self: end;

  span {
    font-size: ${({ theme }) => theme.icons.medium.xxm};
    color: ${({ theme }) => theme.colors.gold.four};
    justify-self: end;
    align-self: center;

    &:hover {
      cursor: pointer;
    }
  }
`;
