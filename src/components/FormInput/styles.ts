import styled from "styled-components";

type StyleProps = {
  error?: string;
};

export const FormInputContainer = styled.div<StyleProps>`
  position: relative;
  display: flex;
  flex-wrap: no-wrap;
  border-radius: ${({ theme }) => theme.border.radius.xxsmall};
  border: 1px solid
    ${({ error, theme }) => (error ? theme.colors.red : theme.colors.secondary)};
  background: transparent;

  input {
    all: unset;
    width: 100%;
    padding: clamp(8px, 0.833vw, 0.833vw);
    border-radius: clamp(8px, 0.833vw, 0.833vw);
    font-size: 14px;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const InputLabel = styled.label<StyleProps>`
  position: absolute;
  top: 4px;
  left: clamp(6px, 0.533vw, 0.833vw);
  font-size: 8px;
  text-transform: uppercase;
  padding: 0 clamp(4px, 0.21vw, 0.21vw);
  color: ${({ error, theme }) =>
    error ? theme.colors.red : theme.colors.white};
`;

export const ErrorLabel = styled.span`
  position: absolute;
  bottom: calc(-1 * 0.5 * clamp(12px, 0.833vw, 0.833vw));
  right: clamp(16px, 0.833vw, 0.833vw);
  color: ${({ theme }) => theme.colors.red};
  font-size: clamp(10px, 0.6vw, 0.6vw);
  padding: 0 clamp(4px, 0.21vw, 0.21vw);
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: clamp(20px, 1.041vw, 1.041vw);
  padding: 0 clamp(8px, 0.5vw, 0.5vw);
  cursor: pointer;
  border-radius: clamp(8px, 0.833vw, 0.833vw);
`;
