import styled, { css } from "styled-components";

export const DropZone = styled.div`
  ${({ theme }) => css`
    border: 1px dashed ${theme.colors.secondary};
    border-radius: 4px;
    padding: 20px;
    text-align: center;
    cursor: pointer;
    transition: background-color 0.2s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.6rem;
    svg {
      stroke: ${theme.colors.secondary};
    }

    label {
      font-size: 16px;
      width: 50%;
      font-weight: 500;
      color: ${theme.colors.secondary};
    }
  `}
`;

export const FileInfo = styled.div`
  ${({ theme }) => css`
    margin-top: 10px;
    font-size: 14px;
    p {
      color: ${theme.colors.secondary};
    }
  `}
`;

export const Error = styled.div`
  color: red;
  margin-top: 10px;
`;
