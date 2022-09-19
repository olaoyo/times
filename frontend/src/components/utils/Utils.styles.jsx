import styled from "styled-components";

// Margin Tops
export const MarginTop1RemStyles = styled.div`
  grid-column: col-start 1 / col-end 8;
  justify-items: center;
  align-content: center;
  padding-top: ${({ theme }) => theme.utils.u2};
`;

// Margin Bottoms
export const MarginBottom12RemStyles = styled.div`
  grid-column: col-start 1 / col-end 8;
  justify-items: center;
  align-content: center;
  padding-bottom: ${({ theme }) => theme.utils.u12};
`;
