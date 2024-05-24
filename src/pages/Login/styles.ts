import styled, { css } from "styled-components";
export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.primary};
    height: 100vh;
  `}
`;
