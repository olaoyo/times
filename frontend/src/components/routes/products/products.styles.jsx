import styled from "styled-components";

export const ProductCardListStyles = styled.div`
  grid-column: col-start 1 / col-end 8;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(37rem, 1fr));
  column-gap: 2rem;
  row-gap: 4rem;
  
  padding: 6rem 0 15rem 0;
`;
