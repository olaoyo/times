import styled from "styled-components";

export const CartTotalStyles = styled.div`
  grid-column: col-start 1 / col-end 8;
  display: grid;
  grid-template-columns: repeat(2, max-content);
  padding-top: 5rem;
  margin-bottom: 15.2rem;
`;

export const CartButtonsGrid = styled.div`
  grid-column: 1 / span 4;
  display: grid;
  grid-template-columns: repeat(2, max-content);
  column-gap: 1.5rem;
  width: 43.4rem;
  height: 5.4rem;
`;

export const CheckoutButton = styled.button`
  width: 18rem;
  height: 5.4rem;
  color: ${({ theme }) => theme.colors.black.three};
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
  font-weight: 600;
  letter-spacing: 0.12rem;
  text-transform: uppercase;
  border: none;
  background: linear-gradient(
    261.88deg,
    ${({ theme }) => theme.colors.gold.two} -5.03%,
    ${({ theme }) => theme.colors.gold.three} 98.82%
  );

  &:hover {
    cursor: pointer;
  }
`;

export const ContinueShoppingButton = styled.button`
  width: 23.9rem;
  height: 5.4rem;
  color: ${({ theme }) => theme.colors.gold.four};
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
  font-weight: 600;
  letter-spacing: 0.12rem;
  text-transform: uppercase;
  border: 3px solid ${({ theme }) => theme.colors.gold.four};
  background: ${({ theme }) => theme.colors.black.two};

  &:hover {
    cursor: pointer;
  }
`;

export const SubtotalGrid = styled.div`
  grid-column: 7 / span 2;
  display: grid;
  grid-template-columns: repeat(2, max-content);
  justify-self: center;
  /* margin-right: 4rem; */
  column-gap: 3rem;
  width: 16.8rem;
  height: 2.8rem;
`;

export const SubtotalText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white.two};
  text-transform: uppercase;
  align-self: center;
`;

export const SubtotalAmount = styled.h5`
  width: 13.9rem;
  height: 2.8rem;
  font-size: ${({ theme }) => theme.fontSizes.headers.h5};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.white.one};
  justify-self: end;
  align-self: center;
`;
