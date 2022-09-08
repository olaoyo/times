import styled from "styled-components";

export const RefStyles = styled.section`
  grid-column: col-start 1 / col-end 8;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(26.3rem, 1fr)) 27rem;
  column-gap: 2rem;
  align-items: center;

  padding-bottom: 9rem;
`;

export const RefImageWatch = styled.img`
  width: 26.3rem;
  height: 26.3rem;
`;

export const RefText = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  row-gap: 2rem;
  width: 27rem;
  height: 23.5rem;
`;

export const RefTextHeader = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.headers.h5};
  color: ${({ theme }) => theme.colors.white.one};
  font-weight: 800;
  padding-right: 6rem;
`;

export const RefParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
  color: ${({ theme }) => theme.colors.grey.two};
`;

export const RefButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  align-items: center;

  span {
    font-size: ${({ theme }) => theme.icons.large.xxl};
    color: ${({ theme }) => theme.colors.gold.four};
    margin-left: -2rem;
  }
`;

export const RefButton = styled.button`
  width: 22.7rem;
  height: 7rem;
  color: ${({ theme }) => theme.colors.gold.four};
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
  font-weight: 600;
  letter-spacing: .12rem;
  border: 3px solid ${({ theme }) => theme.colors.gold.four};
  background: ${({ theme }) => theme.colors.black.three};
`;
