import styled from "styled-components";

export const LoginStyles = styled.div`
  grid-column: col-start 1 / col-end 8;
  display: grid;
  grid-template-columns: repeat(8, minmax(13rem, auto));
  margin: 6.8rem 0 17rem 0;
`;

export const LoginHeader = styled.h5`
  grid-column: 4 / span 2;
  font-size: ${({ theme }) => theme.fontSizes.headers.h5};
  color: ${({ theme }) => theme.colors.gold.one};
  padding-bottom: 3.2rem;
`;

export const LoginForm = styled.form`
  grid-column: 4 / span 2;
  display: grid;
  grid-template-rows: repeat(3, max-content);
  row-gap: 1.3rem;
`;

export const LoginInputAndLabelGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(2, max-content);
`;

export const LoginLabel = styled.label`
  display: block;
  color: ${({ theme }) => theme.colors.grey.two};
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
  font-weight: 400;
  margin-bottom: 1.2rem;
`;

export const LoginInput = styled.input`
  width: 30.6rem;
  height: 5.5rem;
  border: 1px solid transparent;
  background-color: ${({ theme }) => theme.colors.black.two};
  color: ${({ theme }) => theme.colors.grey.three};
  font-size: ${({ theme }) => theme.fontSizes.headers.h8};
  font-weight: 400;
  padding-left: 2rem;

  &:focus {
    outline: none;
    box-shadow: 0 1rem 2rem rgba(${({ theme }) => theme.colors.gold.two}, 0.1);
    border: 1px solid ${({ theme }) => theme.colors.gold.two};
  }

  &:focus:invalid {
    border: 1px solid ${({ theme }) => theme.colors.gold.one};
  }

  &::-webkit-input-placeholder {
    color: ${({ theme }) => theme.colors.grey.three};
  }
`;

export const SignInButton = styled.button`
  width: 18rem;
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
  margin-top: 1.6rem;

  &:hover {
    cursor: pointer;
  }
`;

export const Register = styled.p`
  grid-column: 4 / span 2;
  display: block;
  color: ${({ theme }) => theme.colors.grey.two};
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
  font-weight: 400;
  margin-top: 3.1rem;
`;