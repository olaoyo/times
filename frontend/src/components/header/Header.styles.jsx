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
  letter-spacing: 0.12rem;
`;

export const NavMenu = styled.li`
  font-size: ${({ theme }) => theme.fontSizes.headers.h7};
  color: ${({ theme }) => theme.colors.grey.one};
  font-weight: 500;
  letter-spacing: 0.12rem;
`;

export const Cart = styled.div`
  grid-column: 5 / span 1;
  justify-self: center;
  align-self: center;

  span {
    font-size: ${({ theme }) => theme.icons.medium.xxm};
    color: ${({ theme }) => theme.colors.grey.one};
    font-weight: 500;
    transform: scaleX(-1);
    padding: 1rem 0 0 2rem;
  }
`;

export const User = styled.div`
  grid-column: 6 / span 3;
  
  display: grid;
  grid-template-columns: repeat(3, 13rem);
`;

export const Profile = styled.p`
  grid-column: 1 / span 2;
  justify-self: center;
  align-self: center;
  width: 26rem;
  padding-left: 4rem;
  
  font-size: ${({ theme }) => theme.fontSizes.headers.h7};
  background-color: ${({ theme }) => theme.colors.black.one};
  color: ${({ theme }) => theme.colors.gold.four};
  font-weight: 500;
  border: none;
  text-transform: uppercase;
`;

export const Space = styled.div`
  width: 20rem;
  
`;

export const AuthButton = styled.button`
  grid-column: 3 / span 1;
  justify-self: end;
  width: 13rem;
  height: 5rem;
  color: ${({ theme }) => theme.colors.gold.four};
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
  font-weight: 600;
  letter-spacing: 0.12rem;
  text-transform: uppercase;
  border: 3px solid ${({ theme }) => theme.colors.gold.four};
  background: ${({ theme }) => theme.colors.black.one};
  
  &:hover {
    cursor: pointer;
  }
`;