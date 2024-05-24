import styled, { css } from "styled-components";
export const Wrapper = styled.div`
  ${({ theme }) => css`
    img {
      width: 40px !important;
      height: 40px !important;
    }
  `}
`;
