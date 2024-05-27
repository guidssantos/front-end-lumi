import styled from "styled-components";
export const Wrapper = styled.div`
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const Header = styled.div`
  display: flex;
  align-items: flex-end;
  span {
    font-weight: 400;
    font-size: 24px;
    font-variation-settings: "opsz" auto;
  }
`;

export const GraphGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const Filters = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1.6rem;
  }
`;

export const InputsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;
