import styled, { css } from "styled-components";
export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 260px;
    height: 300px;
    border-radius: ${theme.border.radius.xxsmall};
    box-shadow: ${theme.shadows.default};
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 142px;
      height: 80px;
  `}
`;

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const LoginForm = styled.form`
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
