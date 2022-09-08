import styled from "styled-components";

export const FooterStyles = styled.footer`
  grid-column: col-start 1 / col-end 8;

  display: grid;
  grid-template-columns: repeat(8, minmax(13rem, auto));

  padding-bottom: 5rem;
`;

export const Times = styled.div`
  grid-column: 1 / span 2;

  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(3, max-content);
  row-gap: 2rem;
`;

export const Logo = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.headers.h3};
  color: ${({ theme }) => theme.colors.white.one};
  font-weight: 800;
`;

export const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
  color: ${({ theme }) => theme.colors.grey.two};
  font-weight: 300;
  line-height: ${({ theme }) => theme.lineHeights.paragraphs.l1};
`;

export const Year = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
  color: ${({ theme }) => theme.colors.grey.two};
  font-weight: 700;
`;

export const Info = styled.div`
  grid-column: 4 / span 5;

  display: grid;
  grid-template-columns: repeat(3, max-content);
  column-gap: 3rem;
`;

export const SiteMap = styled.div`
  display: grid;
  grid-template-rows: repeat(5, min-content);
  row-gap: 1.5rem;
`;

export const GoldenHeader = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.headers.h5};
  color: ${({ theme }) => theme.colors.gold.one};
  font-weight: 800;
`;

export const Header = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.headers.h8};
  color: ${({ theme }) => theme.colors.white.one};
  font-weight: 700;
  line-height: ${({ theme }) => theme.lineHeights.paragraphs.l1};
`;

export const Contact = styled.div`
  display: grid;
  grid-template-rows: repeat(3, min-content);
  row-gap: 1.5rem;
`;

export const Span = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
  color: ${({ theme }) => theme.colors.grey.two};
  font-weight: 300;
  line-height: ${({ theme }) => theme.lineHeights.paragraphs.l1};
`;

export const SocialMedia = styled.div`
  display: grid;
  grid-template-columns: repeat(3, min-content);
  column-gap: 1rem;

  font-size: ${({ theme }) => theme.fontSizes.headers.h7};
  color: ${({ theme }) => theme.colors.grey.one};
  font-weight: 500;
`;

export const SubscribeNewsLetter = styled.div`
  /* grid-column: 4 / span end; */
  display: grid;
  grid-template-rows: repeat(3, min-content);
  row-gap: 1.5rem;
`;

export const SubscribeForm = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
`;

export const SubscribeDiv = styled.div``;

export const SubscribeInput = styled.input`
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

export const SubscribeButton = styled.button`
  width: 59px;
  height: 55px;
  border: none;
  background-color: ${({ theme }) => theme.colors.gold.two};
  margin-left: -5.9rem;

  span {
    width: 3rem;
    height: 3rem;
    color: ${({ theme }) => theme.colors.gold.one};

    &:hover {
      cursor: pointer;
    }
  }
`;
