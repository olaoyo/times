import styled from "styled-components";

export const ProductListStyles = styled.div`
  grid-column: col-start 1 / col-end 6;
  display: grid;
  /* grid-template-columns: repeat(8, minmax(13rem, auto)); */
  grid-template-columns: repeat(6, minmax(15.5rem, auto));
  margin: 6.8rem 0 17rem 0;
  padding-left: 7rem;
`;

export const ProductListGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(3, max-content);
`;

export const ProductListHeaderAndButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  
`

export const ProductListHeader = styled.h5`
  /* grid-column: 4 / span 2; */
  font-size: ${({ theme }) => theme.fontSizes.headers.h5};
  color: ${({ theme }) => theme.colors.gold.one};
  padding-bottom: 3.2rem;
  justify-self: center;
`;

export const ProductListCreateButton = styled.button`
  width: 5rem;
  height: 5rem;
  color: ${({ theme }) => theme.colors.gold.four};
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
  font-weight: 600;
  letter-spacing: 0.12rem;
  text-transform: uppercase;
  border: 3px solid ${({ theme }) => theme.colors.gold.four};
  border-radius: 20%;
  background: ${({ theme }) => theme.colors.black.three};
  transition: all 0.5s;
  justify-self: center;
  margin-bottom: 3.2rem;
  /* margin-top: -2.6rem; */

  &:hover {
    width: 6rem;
    height: 6rem;
    color: ${({ theme }) => theme.colors.black.three};
    font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
    font-weight: 600;
    letter-spacing: 0.12rem;
    border: 3px solid ${({ theme }) => theme.colors.gold.four};
    background: ${({ theme }) => theme.colors.gold.four};
    cursor: pointer;
}
`

export const ProductListContentGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(2, max-content);
`;

export const ProductListTableHead = styled.div`
  grid-column: 2 / span 7;
  display: grid;
  
  grid-template-columns: repeat(6, minmax(15.5rem, auto));

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

export const ProductListTableBody = styled.div`
  grid-column: 1 / span 8;
  display: grid;
  
  grid-template-columns: repeat(6, minmax(15.5rem, auto));

  column-gap: 2rem;
  justify-items: center;
  align-items: center;
`;

export const TableBody = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
  color: ${({ theme }) => theme.colors.grey.two};
  font-weight: 300;
  text-transform: capitalize;
  padding: 1rem 0;
`;

export const TableBodyEmail = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
  color: ${({ theme }) => theme.colors.grey.two};
  font-weight: 300;
  text-transform: lowercase;
  padding: 1rem 0;
`;

export const TableBodyIcon1 = styled.div`
  
  
  width: 2.5rem;
  height: 2.5rem;

  span {
    font-size: ${({ theme }) => theme.icons.medium.xxm};
    color: ${({ theme }) => theme.colors.gold.four};
  }
`;

export const TableBodyIcon2 = styled.button`
  
  
  background: ${({ theme }) => theme.colors.black.three};
  border: none;
  width: 2.5rem;
  height: 2.5rem;

  span {
    font-size: ${({ theme }) => theme.icons.medium.xxm};
    color: ${({ theme }) => theme.colors.gold.four};

    &:hover {
      cursor: pointer;
    }
  }
`;

export const ProductListLineGrid = styled.div`
  grid-column: 1 / span 8;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
`;

export const ProductListLine = styled.div`
  margin-top: -1rem;
  

  &::after {
    content: "";
    display: block;
    height: 0.1rem;
    background: ${({ theme }) => theme.colors.gold.five};
  }
`;