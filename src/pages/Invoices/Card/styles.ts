import styled, { css } from "styled-components";
export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.6rem 2.4rem;
    flex-grow: 1;
    z-index: 0;
    background: #0e1917;
    /* border: 1px solid ${theme.colors.secondary}; */
    border-radius: ${theme.border.radius.xxsmall};

    @media (max-width: 768px) {
      flex-wrap: wrap;
      gap: 1.6rem;
    }
  `}
`;

export const IconWrapper = styled.button`
  ${({ theme }) => css`
    background-color: #35473c;
    padding: 1.2rem;
    border-radius: ${theme.border.radius.xxsmall};

    path,
    g,
    polyline {
      color: ${theme.colors.text};
    }
  `}
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  border-left: 1px solid #d8d8d8;
  padding-left: 1.6rem;
`;

export const DescriptionTitle = styled.h1`
  font-size: 1rem;
  font-weight: 500;
  line-height: 100%;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: #dadada;
`;

export const DescriptionValue = styled.span`
  font-size: 1.6rem;
  font-weight: normal;
  line-height: 100%;
  display: flex;
  align-items: center;
  letter-spacing: 0em;
  color: #a6ffa6;
`;

export const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

export const RighWrapper = styled.div``;

export const Button = styled.button``;

export const Money = styled.h1`
  font-weight: 400;
  font-size: 24px;
  color: #a6ffa6;

  strong {
    font-weight: 700;
    font-size: 24px;
    color: #a6ffa6;
  }
`;
