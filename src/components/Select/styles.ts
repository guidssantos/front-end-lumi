import styled from "styled-components";

export const SelectWrapper = styled.div`
  position: relative;
  flex: 1;
`;

export const SelectContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  background: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.border.radius.xxsmall};

  display: flex;
  flex-wrap: no-wrap;
  min-width: 240px;

  input {
    all: unset;
    width: 100%;
    padding: clamp(12px, 0.42vw, 0.42vw);
    border-radius: ${({ theme }) => theme.border.radius.xxsmall};

    font-size: clamp(12px, 0.833vw, 0.833vw);
    color: ${({ theme }) => theme.colors.secondary};
  }

  input::placeholder {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 14px;
    font-weight: normal;
    line-height: 20px;
    display: flex;
    align-items: center;
    letter-spacing: 0em;
    font-variation-settings: "opsz" auto;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: clamp(20px, 1.041vw, 1.041vw);
  padding: 0 clamp(8px, 0.5vw, 0.5vw);
  cursor: pointer;
  border-radius: clamp(16px, 0.833vw, 0.833vw);
  svg {
    fill: ${({ theme }) => theme.colors.secondary};
  }
`;

export const OptionsContainer = styled.div`
  position: absolute;
  width: 100%;
  padding: clamp(8px, 0.42vw, 0.42vw);
  border-radius: ${({ theme }) => theme.border.radius.xxsmall};

  top: calc(100% + clamp(8px, 0.42vw, 0.42vw));
  display: flex;
  flex-direction: column;
  gap: clamp(6px, 0.25vw, 0.25vw);
  background: ${({ theme }) => theme.colors.primary};
  z-index: 9;

  button {
    all: unset;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: clamp(12px, 0.833vw, 0.833vw);
    padding: clamp(4px, 0.42vw, 0.42vw);
    border-radius: ${({ theme }) => theme.border.radius.xxsmall};

    border: 1px solid ${({ theme }) => theme.colors.secondary};
    cursor: pointer;

    &:last-child {
      background: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

export const OptionsList = styled.div`
  height: clamp(200px, 20vh, 20vh);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: clamp(6px, 0.25vw, 0.25vw);
`;

type OptionsStyleProps = {
  selected: boolean;
};

export const Option = styled.div<OptionsStyleProps>`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  gap: 1.6rem;
  width: 100%;
  border-radius: 8px;
  padding: clamp(12px, 0.42vw, 0.42vw);
  ${({ selected }) => selected && `background: #3A4F44;`}

  div {
    width: clamp(12px, 0.833vw, 0.833vw);
    height: clamp(12px, 0.833vw, 0.833vw);
    border: 1px solid #ededed;
    border-radius: clamp(4px, 0.21vw, 0.21vw);

    ${({ selected }) => selected && "background: #3A4F44;"}
  }

  &:hover {
    background: #efefef;

    span {
      color: black;
    }

    div {
      border: 1px solid black;
      ${({ selected }) => selected && "background: black;"}
    }
  }

  span {
    font-size: clamp(12px, 0.833vw, 0.833vw);
    padding-right: clamp(8px, 0.42vw, 0.42vw);
    text-align: right;
    color: ${({ theme }) => theme.colors.secondary};
    ${({ selected, theme }) => selected && `color: ${theme.colors.secondary};`}
  }
`;

export const QuantitySelectedIndicator = styled.span`
  position: absolute;
  bottom: 105%;
  right: clamp(4px, 0.16vw, 0.16vw);
  font-size: clamp(10px, 0.5vw, 0.5vw);
  color: ${({ theme }) => theme.colors.secondary};
`;
