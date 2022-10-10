import styled from "styled-components";



/* --------------- ORDER DETAILS ------------------ */


export const PlaceOrderStyles = styled.div`
  grid-column: col-start 1 / col-end 8;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  margin: 6.8rem 0 17rem 0;
`;


/* --------------- SHIPPING & PAYMENT METHOD ------------------ */

export const ProductOrderDetailsGrid = styled.div`
  grid-column: 1 / span 5;
  grid-template-rows: repeat(2, 1fr);
`;

export const ProductOrderAndPaymentDetailsGrid = styled.div`
  grid-column: 1 / span 5;

  display: grid;
  grid-template-columns: repeat(2, max-content);
`;

export const ProductOrderPlaceOrderAndLineGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(2, max-content);
  row-gap: 4rem;
`;

export const ProductOrderPlaceOrder = styled.div`
  grid-column: 1 / span 2;

  display: grid;
  grid-template-rows: repeat(2, max-content);
  row-gap: 2.5rem;
`;

export const ProductOrderHeader = styled.h5`
  font-size: ${({ theme }) => theme.fontSizes.headers.h7};
  color: ${({ theme }) => theme.colors.gold.four};
  font-weight: 500;
  text-transform: uppercase;
`;

export const ProductOrderParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
  color: ${({ theme }) => theme.colors.grey.two};
  font-weight: 300;
  width: 28.2rem;
  height: 4.9rem;
`;

export const ProductOrderPaymentMethod = styled.div`
  grid-column: 4 / span 2;

  display: grid;
  grid-template-rows: repeat(2, max-content);
  row-gap: 2.5rem;
`;

export const ProductOrderLine = styled.div`
  justify-self: center;
  margin-top: -1rem;

  &::after {
    content: "";
    display: block;
    width: 61rem;
    height: 0.1rem;
    background: ${({ theme }) => theme.colors.gold.five};
  }
`;


/* --------------- WATCHES, QTY & PRICE ------------------ */

export const ProductOrderWatchesAndLineGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(2, max-content);
  row-gap: 4.8rem;
`;

export const ProductOrderWatchesGrid = styled.div`
  grid-column: 1 / span 5;

  display: grid;
  grid-template-columns: repeat(3, max-content);
  column-gap: 5rem;
  align-items: center;
  padding-top: 4.8rem;
`;

export const ProductOrderWatchImage = styled.img`
  width: 18.5rem;
  height: 14.3rem;
`;

export const ProductOrderWatchName = styled.p`
  width: 16.9rem;
  height: 2.8rem;
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p1};
  color: ${({ theme }) => theme.colors.white.one};
  text-transform: uppercase;
`;

export const ProductOrderQtyAndPriceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, max-content);
  column-gap: 4rem;
  width: 4rem;
  height: 2.8rem;
`;

export const ProductOrderQtyAndPrice = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p1};
  color: ${({ theme }) => theme.colors.white.one};
`;



/* --------------- ORDER SUMMARY ------------------ */

export const ProductOrderSummaryGrid = styled.div`
  grid-column: 6 / span 3;
  width: 50.7rem;
  height: 54.2rem;
  border: 4px solid ${({ theme }) => theme.colors.gold.four};

  display: grid;
  grid-template-rows: repeat(6, max-content);
`;

export const ProductOrderSummaryContentGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(2, max-content);
`;

export const ProductOrderSummaryHeader = styled.h5`
  grid-column: 1 / span 1;
  font-size: ${({ theme }) => theme.fontSizes.headers.h7};
  color: ${({ theme }) => theme.colors.gold.four};
  font-weight: 500;
  text-transform: uppercase;
  padding: 3rem 3rem 2rem 3.5rem;
`;

export const ProductOrderSummaryParagraphGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 2.3rem 3.5rem;
`;

export const ProductOrderSummaryParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
  color: ${({ theme }) => theme.colors.grey.two};
  font-weight: 300;
`;

export const ProductOrderSummaryAmount = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
  color: ${({ theme }) => theme.colors.grey.two};
  font-weight: 300;
  justify-self: end;
`;

export const ProductOrderSummaryLine = styled.div`
  justify-self: center;
  margin-top: -1rem;

  &::after {
    content: "";
    display: block;
    width: 43.1rem;
    height: 0.1rem;
    background: ${({ theme }) => theme.colors.gold.five};
  }
`;

export const ProductOrderSummaryButton = styled.button`
  width: 43.1rem;
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
  margin: 4rem 3rem 2rem 3.5rem;

  &:hover {
    cursor: pointer;
  }
`;
