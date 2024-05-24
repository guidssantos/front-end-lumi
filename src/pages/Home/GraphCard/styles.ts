import styled, { css } from "styled-components";
export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 140px;
    /* Smart layout */
    display: flex;
    flex-direction: column;
    padding: 16px;
    gap: 20px;
    flex-grow: 1;
    z-index: 0;

    border: 1px solid ${theme.colors.secondary};
    border-radius: ${theme.border.radius.xxsmall};

    h1 {
      color: ${theme.colors.secondary};
    }

    h2 {
      text-align: center;
      font-weight: 400;
      font-size: 16px;
      font-variation-settings: "opsz" auto;
    }
    strong {
      font-weight: 700;
      font-size: 32px;
      font-variation-settings: "opsz" auto;
    }
  `}
`;
