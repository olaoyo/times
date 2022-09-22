import styled from "styled-components";

export const LoaderStyles = styled.div`
  grid-column: col-start 1 / col-end 8;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  position: relative;

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 14.6rem;
    height: 14.6rem;
    margin: 2rem;
    border: 2rem solid ${({ theme }) => theme.colors.gold.one};
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${({ theme }) => theme.colors.gold.four} transparent
      transparent transparent;
  }
  div:nth-child(1) {
    animation-delay: -0.45s;
  }
  div:nth-child(2) {
    animation-delay: -0.3s;
  }
  div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
