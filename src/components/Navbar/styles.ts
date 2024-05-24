import styled, { css } from "styled-components";
export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;

    img {
      width: 123px;
      height: 69px;
    }
  `}
`;
