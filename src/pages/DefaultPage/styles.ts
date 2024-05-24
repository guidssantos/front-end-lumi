import styled, { css } from "styled-components";
export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    height: 100vh;
  `}
`;
export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    width: 100%;
  `}
`;
