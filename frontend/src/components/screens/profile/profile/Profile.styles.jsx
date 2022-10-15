import styled from "styled-components";

export const ProfileStyles = styled.div`
  grid-column: col-start 1 / col-end 8;
  display: grid;
  grid-template-columns: repeat(8, minmax(13rem, auto));
  margin: 6.8rem 0 17rem 0;
`;

export const ProfileAndOrdersListGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  column-gap: 8rem;
`;

/*--------------PROFILE UPDATE------------------*/

export const ProfileUpdateGrid = styled.div`
  /* grid-column: 1 / span 2; */
`;

export const ProfileUpdateHeader = styled.h5`
  /* grid-column: 1 / span 2; */
  font-size: ${({ theme }) => theme.fontSizes.headers.h5};
  color: ${({ theme }) => theme.colors.gold.one};
  padding-bottom: 3.2rem;
  justify-self: center;
`;

export const ProfileUpdateForm = styled.form`
  /* grid-column: 1 / span 2; */
  display: grid;
  grid-template-rows: repeat(3, max-content);
  row-gap: 1.3rem;
`;

export const ProfileUpdateInputAndLabelGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(2, max-content);
`;

export const ProfileUpdateLabel = styled.label`
  display: block;
  color: ${({ theme }) => theme.colors.grey.two};
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
  font-weight: 400;
  margin-bottom: 1.2rem;
`;

export const ProfileUpdateInput = styled.input`
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

export const ProfileUpdateButton = styled.button`
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

/*--------------ORDER LIST------------------*/

export const OrdersListGrid = styled.div`
  /* grid-column: 2 / span 5;   */
  display: grid;
  grid-template-rows: repeat(3, max-content);
`;

export const OrdersListHeader = styled.h5`
  /* grid-column: 2 / span 2; */
  font-size: ${({ theme }) => theme.fontSizes.headers.h5};
  color: ${({ theme }) => theme.colors.gold.one};
  padding-bottom: 3.2rem;
  justify-self: center;
`;

export const OrdersListContentGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(2, max-content);
  /* grid-template-rows: repeat(2, 1fr); */
  /* grid-template-rows: max-content 1fr; */
`;

export const OrdersListTableHead = styled.div`
  /* grid-column: 2 / span 2; */
  grid-column: 1 / span 6;
  display: grid;
  grid-template-columns: repeat(6, minmax(13rem, auto));
`;

export const TableHead = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.headers.h7};
  color: ${({ theme }) => theme.colors.gold.four};
  font-weight: 500;
  text-transform: uppercase;

  /* padding-bottom: 3.2rem; */
  justify-self: center;
`;

export const OrdersListTableBody = styled.div`
  /* grid-column: 2 / span 2; */
  grid-column: 1 / span 6;
  display: grid;
  grid-template-columns: repeat(6, minmax(13rem, auto));
  justify-items: center;
  align-items: center;
`;

export const TableBody = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
  color: ${({ theme }) => theme.colors.grey.two};
  font-weight: 300;
  /* text-transform: uppercase; */
  text-transform: capitalize;
  padding: 1rem 0;
`;

export const OrdersListLineGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, minmax(13rem, auto));
`;

export const OrdersListLine = styled.div`
  /* justify-self: center; */
  margin-top: -1rem;

  &::after {
    content: "";
    display: block;
    height: 0.1rem;
    background: ${({ theme }) => theme.colors.gold.five};
  }
`;

export const OrderDetailsButton = styled.button`
  width: 12.2rem;
  height: 4.06rem;  
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

  &:hover {
    cursor: pointer;
  }
`;
