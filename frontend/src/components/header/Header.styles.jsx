import styled from "styled-components";

export const HeaderStyles = styled.header`
  grid-column: col-start 1 / col-end 8;

  display: grid;
  grid-template-columns: repeat(8, minmax(13rem, auto));

  padding: 4rem 0;
`;

export const Navigation = styled.ul`
  grid-column: 1 / span 4;

  display: grid;
  grid-template-columns: repeat(4, minmax(13rem, auto));
  justify-items: center;
  align-items: center;

  list-style: none;
`;

export const Logo = styled.li`
  font-size: ${({ theme }) => theme.fontSizes.headers.h4};
  color: ${({ theme }) => theme.colors.white.one};
  font-weight: 800;
`;

export const NavMenu = styled.li`
  font-size: ${({ theme }) => theme.fontSizes.headers.h7};
  color: ${({ theme }) => theme.colors.grey.one};
  font-weight: 500;
`;

export const User = styled.div`
  grid-column: 5 / span 4;

  display: grid;
  grid-template-columns: repeat(4, minmax(13rem, auto));
  justify-items: center;
  align-items: center;
`;

export const Cart = styled.div`
  grid-column: 1 / span 1;

  span {
    font-size: ${({ theme }) => theme.icons.medium.xxm};
    color: ${({ theme }) => theme.colors.grey.one};
    font-weight: 500;
    transform: scaleX(-1);
    padding: 1rem 0 0 2rem;
  }
`;

export const Language = styled.select`
  grid-column: 3 / span 1;
  justify-self: end;

  font-size: ${({ theme }) => theme.fontSizes.headers.h7};
  background-color: ${({ theme }) => theme.colors.black.one};
  color: ${({ theme }) => theme.colors.white.one};
  font-weight: 500;
  border: none;
`;

export const Option = styled.option`
  background-color: ${({ theme }) => theme.colors.black.one};
  color: ${({ theme }) => theme.colors.black.one};
`;

export const Auth = styled.div`
  grid-column: 4 / span 1;
  justify-self: center;

  font-size: ${({ theme }) => theme.fontSizes.headers.h7};
  color: ${({ theme }) => theme.colors.white.one};
  font-weight: 500;
`;
