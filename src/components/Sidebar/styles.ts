import styled, { css } from "styled-components";
export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #0e1917;
    width: 80px;
    padding: 4rem;
    gap: 1.6rem;
  `}
`;

export const IconWrapper = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    padding: 1.2rem;
    border-radius: ${theme.border.radius.xxsmall};

    path,
    g,
    polyline {
      color: ${theme.colors.text};
    }
  `}
`;
