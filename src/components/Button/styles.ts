import styled, { css } from "styled-components";
export const Wrapper = styled.button`
  ${({ theme, color }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.2rem;
    width: 100%;
    height: 40px;
    padding: 10px;
    border-radius: ${theme.border.radius.xxsmall};
    background-color: ${color === "primary"
      ? theme.colors.button.primary
      : theme.colors.button.secondary};

    h1 {
      color: ${color === "primary" ? theme.colors.primary : theme.colors.white};
    }

    svg {
      stroke: ${({ theme }) => theme.colors.button.text};
    }
  `}
`;

export const Title = styled.h1`
  font-size: 16px;
  font-weight: 600;
  line-height: 100%;
  text-align: right;
  display: flex;
  align-items: center;
  letter-spacing: 0em;
  color: ${({ theme }) => theme.colors.button.text};
`;
