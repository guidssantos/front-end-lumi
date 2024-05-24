import * as Styled from "./styles";
import { Home, ScrollText } from "lucide-react";

export const Sidebar = () => {
  return (
    <Styled.Wrapper>
      <Styled.IconWrapper>
        <Home />
      </Styled.IconWrapper>
      <Styled.IconWrapper>
        <ScrollText />
      </Styled.IconWrapper>
    </Styled.Wrapper>
  );
};
