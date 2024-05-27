import styled, { css } from "styled-components";

interface IconWrapperProps {
  selected: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #0e1917;
  width: 80px;
  padding: 4rem;
  gap: 1.6rem;
`;

export const IconWrapper = styled.button<IconWrapperProps>`
  ${({ theme, selected }) => css`
    background-color: ${selected
      ? theme.colors.secondary
      : theme.colors.primary};
    padding: 1.2rem;
    border-radius: ${theme.border.radius.xxsmall};

    path,
    g,
    polyline {
      color: ${selected ? theme.colors.primary : theme.colors.text};
    }
  `}
`;
