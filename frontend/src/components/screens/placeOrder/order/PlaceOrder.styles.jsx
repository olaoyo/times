import styled from "styled-components";



/* --------------- ORDER DETAILS ------------------ */


export const PlaceOrderStyles = styled.div`
  grid-column: col-start 1 / col-end 8;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  margin: 6.8rem 0 17rem 0;
`;


/* --------------- SHIPPING & PAYMENT METHOD ------------------ */

export const PlaceOrderDetailsGrid = styled.div`
  grid-column: 1 / span 5;
  grid-template-rows: repeat(2, 1fr);
`;

export const PlaceOrderAndPaymentDetailsGrid = styled.div`
  grid-column: 1 / span 5;

  display: grid;
  grid-template-columns: repeat(2, max-content);
`;

export const PlaceOrderPlaceOrderAndLineGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(2, max-content);
  row-gap: 4rem;
`;

export const PlaceOrderPlaceOrder = styled.div`
  grid-column: 1 / span 2;

  display: grid;
  grid-template-rows: repeat(2, max-content);
  row-gap: 2.5rem;
`;

export const PlaceOrderHeader = styled.h5`
  font-size: ${({ theme }) => theme.fontSizes.headers.h7};
  color: ${({ theme }) => theme.colors.gold.four};
  font-weight: 500;
  text-transform: uppercase;
`;

export const PlaceOrderParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
  color: ${({ theme }) => theme.colors.grey.two};
  font-weight: 300;
  width: 28.2rem;
  height: 4.9rem;
`;

export const PlaceOrderPaymentMethod = styled.div`
  grid-column: 4 / span 2;

  display: grid;
  grid-template-rows: repeat(2, max-content);
  row-gap: 2.5rem;
`;

export const PlaceOrderLine = styled.div`
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

export const PlaceOrderWatchesAndLineGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(2, max-content);
  row-gap: 4.8rem;
`;

export const PlaceOrderWatchesGrid = styled.div`
  grid-column: 1 / span 5;

  display: grid;
  grid-template-columns: repeat(3, max-content);
  column-gap: 5rem;
  align-items: center;
  padding-top: 4.8rem;
`;

export const PlaceOrderWatchImage = styled.img`
  width: 18.5rem;
  height: 14.3rem;
`;

export const PlaceOrderWatchName = styled.p`
  width: 16.9rem;
  height: 2.8rem;
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p1};
  color: ${({ theme }) => theme.colors.white.one};
  text-transform: uppercase;
`;

export const PlaceOrderQtyAndPriceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, max-content);
  column-gap: 4rem;
  width: 4rem;
  height: 2.8rem;
`;

export const PlaceOrderQtyAndPrice = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p1};
  color: ${({ theme }) => theme.colors.white.one};
`;



/* --------------- ORDER SUMMARY ------------------ */

export const PlaceOrderSummaryGrid = styled.div`
  grid-column: 6 / span 3;
  width: 50.7rem;
  height: 54.2rem;
  border: 4px solid ${({ theme }) => theme.colors.gold.four};

  display: grid;
  grid-template-rows: repeat(6, max-content);
`;

export const PlaceOrderSummaryContentGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(2, max-content);
`;

export const PlaceOrderSummaryHeader = styled.h5`
  grid-column: 1 / span 1;
  font-size: ${({ theme }) => theme.fontSizes.headers.h7};
  color: ${({ theme }) => theme.colors.gold.four};
  font-weight: 500;
  text-transform: uppercase;
  padding: 3rem 3rem 2rem 3.5rem;
`;

export const PlaceOrderSummaryParagraphGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 2.3rem 3.5rem;
`;

export const PlaceOrderSummaryParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
  color: ${({ theme }) => theme.colors.grey.two};
  font-weight: 300;
`;

export const PlaceOrderSummaryAmount = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
  color: ${({ theme }) => theme.colors.grey.two};
  font-weight: 300;
  justify-self: end;
`;

export const PlaceOrderSummaryLine = styled.div`
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

export const PlaceOrderSummaryButton = styled.button`
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
