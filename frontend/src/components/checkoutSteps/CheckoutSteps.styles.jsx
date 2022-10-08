import styled from "styled-components";

export const CheckoutStepsStyles = styled.nav`
  grid-column: col-start 1 / col-end 8;

  display: grid;
  grid-template-columns: repeat(8, minmax(13rem, auto));

  padding-top: 4rem;
`;

export const CheckoutStepsItemsGrid = styled.ul`
  grid-column: 2 / span 6;

  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-items: center;
  list-style: none;
`;

export const CheckoutStepsItemActive = styled.li`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
  color: ${({ theme }) => theme.colors.gold.one};
`;

export const CheckoutStepsItemInactive = styled.li`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
  color: ${({ theme }) => theme.colors.grey.five};
`;

export const CheckoutStepsArrowActive = styled.div`
  display: grid;
  justify-items: center;
  width: 4rem;
  height: 4rem;

  span {
    font-size: ${({ theme }) => theme.icons.medium.xxm};
    color: ${({ theme }) => theme.colors.gold.one};
  }
`;

export const CheckoutStepsArrowInactive = styled.div`
  display: grid;
  justify-items: center;
  width: 4rem;
  height: 4rem;

  span {
    font-size: ${({ theme }) => theme.icons.medium.xxm};
    color: ${({ theme }) => theme.colors.grey.five};
  }
`;
