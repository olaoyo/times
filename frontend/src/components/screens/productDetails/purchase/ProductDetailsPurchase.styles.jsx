import styled from "styled-components";

export const ProductDetailsPurchaseStyles = styled.div`
  grid-column: col-start 1 / col-end 8;
  display: grid;
  grid-template-columns: repeat(2, max-content);
  column-gap: 8rem;
`;

export const ProductDetailsPurchaseWatchGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  width: 48.469rem;
  height: 52.407rem;
  align-self: center;
`;

export const ProductDetailsPurchaseCirclesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, max-content);
  column-gap: 1rem;
  align-self: end;
  padding-bottom: 5rem;
`;

export const ProductDetailsPurchaseCircle = styled.div`
  background-color: ${({ theme }) => theme.colors.gold.two};
  width: 1.1rem;
  height: 1.1rem;
  border-radius: 50%;
`;

export const ProductDetailsPurchaseWatch = styled.img`
  width: 39.57rem;
  height: 52.11rem;
`;

export const ProductDetailsPurchaseTextGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(8, max-content);
  width: 60.4rem;
  height: 62.9rem;
  row-gap: 3rem;
`;

export const ProductDetailsPurchaseParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gold.four};
`;

export const ProductDetailsPurchaseHeader2 = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.headers.h2};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white.one};
  margin-top: -2rem;
`;

export const ProductDetailsPurchaseHeader3 = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.headers.h3};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.white.one};
  margin-top: -1rem;
`;

export const ProductDetailsPurchaseWatchFaceColor = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 60.4rem;
  height: 7.1rem;
  border: 2px solid ${({ theme }) => theme.colors.gold.two};
  /* margin-top: -1rem; */
  margin: -1rem 0 1.2rem 0;
`;

export const ProductDetailsPurchaseWatchFaceColorParagraph1 = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p1};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white.one};
  text-transform: uppercase;
  padding-left: 2rem;
  align-self: center;
`;

export const ProductDetailsPurchaseWatchFaceColorCirclesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, max-content);
  column-gap: 1.5rem;
  justify-self: end;
  align-self: center;
  padding-right: 2rem;
`;

export const ProductDetailsPurchaseWatchFaceColorCircle1 = styled.div`
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.gold.one} 0%,
    ${({ theme }) => theme.colors.gold.four} 100%
  );
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;

export const ProductDetailsPurchaseWatchFaceColorCircle2 = styled.div`
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.blue.one} 0%,
    ${({ theme }) => theme.colors.blue.two} 51.04%,
    ${({ theme }) => theme.colors.blue.three} 100%
  );
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;

export const ProductDetailsPurchaseWatchFaceColorCircle3 = styled.div`
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.green.one} 0%,
    ${({ theme }) => theme.colors.green.two} 100%,
    ${({ theme }) => theme.colors.green.three} 0%,
    ${({ theme }) => theme.colors.green.four} 100%
  );
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;

export const ProductDetailsPurchaseWatchFaceColorCircle4 = styled.div`
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.gold.four} 100%,
    ${({ theme }) => theme.colors.gold.one} 100%
  );
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;

export const ProductDetailsPurchaseWatchFaceColorCircle5 = styled.div`
  background: ${({ theme }) => theme.colors.orange.one};
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;

export const ProductDetailsPurchaseWatchFaceColorCircle6 = styled.div`
  background: ${({ theme }) => theme.colors.blue.four};
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;

export const ProductDetailsPurchaseWatchFaceColorQuantityGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, max-content);
  justify-self: end;
  align-self: center;
  padding-right: 2rem;
`;

export const ProductDetailsPurchaseWatchFaceColorQuantityChange = styled.div`
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

export const ProductDetailsPurchaseWatchFaceColorQuantity = styled.h5`
  display: grid;
  justify-items: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  font-size: ${({ theme }) => theme.fontSizes.headers.h5};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.white.one};
`;

export const ProductDetailsPurchaseWatchFaceColorParagraph2 = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.grey.two};
`;

export const Buttons = styled.div`
  display: grid;
  grid-template-columns: repeat(2, min-content);
  column-gap: 2rem;
  margin-top: 1.7rem;
`;

export const BuyNowButton = styled.button`
  width: 15.4rem;
  height: 5.4rem;
  color: ${({ theme }) => theme.colors.black.three};
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
  font-weight: 600;
  letter-spacing: 0.12rem;
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

export const AddToCartButton = styled.button`
  width: 15.4rem;
  height: 5.4rem;
  color: ${({ theme }) => theme.colors.gold.four};
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
  font-weight: 600;
  letter-spacing: 0.12rem;
  border: 3px solid ${({ theme }) => theme.colors.gold.four};
  background: ${({ theme }) => theme.colors.black.two};

  &:hover {
    cursor: pointer;
  }
`;
