import styled from "styled-components";

export const AdminStyles = styled.div`
  grid-column: col-start 1 / col-end 6;
  display: grid;
  /* grid-template-columns: repeat(8, minmax(13rem, auto)); */
  grid-template-columns: repeat(6, minmax(17.3rem, auto));
  margin: 6.8rem 0 17rem 0;
  padding-left: 7rem;
`;

export const AdminHeader = styled.h5`
  grid-column: 3 / span 2;
  font-size: ${({ theme }) => theme.fontSizes.headers.h5};
  color: ${({ theme }) => theme.colors.gold.one};
  padding-bottom: 3.2rem;
  justify-self: center;
`;

export const AdminIconsGrid = styled.div`
  grid-column: 1 / 6;
  display: grid;
  grid-template-columns: repeat(3, 34.6rem);
  justify-items: center;
  
  /* column-gap: 5rem; */
`;

export const AdminIconAndTextGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(2, max-content);
  justify-items: center;
  align-items: center;

  &:hover {
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    transform: scale(1.05);
  }
`;

export const AdminIcon = styled.div`
  span {
    font-size: ${({ theme }) => theme.icons.xxlarge.xxl};
    color: ${({ theme }) => theme.colors.gold.four};
  }
`;

export const AdminText = styled.h5`
  font-size: ${({ theme }) => theme.fontSizes.headers.h7};
  color: ${({ theme }) => theme.colors.gold.four};
  font-weight: 500;
  text-transform: uppercase;
`;
