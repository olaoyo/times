import styled from "styled-components";

export const OrderListStyles = styled.div`
  grid-column: col-start 1 / col-end 6;
  display: grid;
  /* grid-template-columns: repeat(8, minmax(13rem, auto)); */
  /* grid-template-columns: repeat(6, minmax(15.5rem, auto)); */
  grid-template-columns: repeat(7, minmax(14.86rem, auto));
  margin: 6.8rem 0 17rem 0;
  padding-left: 2.5rem;
`;

export const OrderListGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(3, max-content);
`;

export const OrderListHeader = styled.h5`
  /* grid-column: 4 / span 2; */
  font-size: ${({ theme }) => theme.fontSizes.headers.h5};
  color: ${({ theme }) => theme.colors.gold.one};
  padding-bottom: 3.2rem;
  justify-self: center;
`;

export const OrderListContentGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(2, max-content);
`;

export const OrderListTableHead = styled.div`
  grid-column: 2 / span 7;
  display: grid;
  
  /* grid-template-columns: repeat(6, minmax(15.5rem, auto)); */
  grid-template-columns: repeat(7, minmax(14.86rem, auto));

  column-gap: 2rem;
  justify-items: center;
  align-items: center;
`;

export const TableHead = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.headers.h7};
  color: ${({ theme }) => theme.colors.gold.four};
  font-weight: 500;
  text-transform: uppercase;
`;

export const OrderListTableBody = styled.div`
  grid-column: 1 / span 8;
  display: grid;
  
  /* grid-template-columns: repeat(6, minmax(15.5rem, auto)); */
  grid-template-columns: repeat(7, minmax(14.86rem, auto));

  column-gap: 2rem;
  justify-items: center;
  align-items: center;
`;

export const TableBody = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
  color: ${({ theme }) => theme.colors.grey.two};
  font-weight: 300;
  text-transform: capitalize;
  padding: 1.4rem 0;
`;


export const TableBodyIcon = styled.div` 
  width: 2.5rem;
  height: 2.5rem;

  span {
    font-size: ${({ theme }) => theme.icons.medium.xxm};
    color: ${({ theme }) => theme.colors.gold.four};
  }
`;

export const OrderListButton = styled.button`
  width: 12.2rem;
  height: 4.06rem;  
  color: ${({ theme }) => theme.colors.black.three};
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
  font-weight: 600;
  letter-spacing: 0.12rem;
  text-transform: uppercase;
  border: none;
  margin-top: 0.5rem;
  background: linear-gradient(
    261.88deg,
    ${({ theme }) => theme.colors.gold.two} -5.03%,
    ${({ theme }) => theme.colors.gold.three} 98.82%
  );

  &:hover {
    cursor: pointer;
  }
`;

export const OrderListLineGrid = styled.div`
  grid-column: 1 / span 8;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
`;

export const OrderListLine = styled.div`
  margin-top: -1rem;
  

  &::after {
    content: "";
    display: block;
    height: 0.1rem;
    background: ${({ theme }) => theme.colors.gold.five};
  }
`;