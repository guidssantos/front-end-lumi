import { Link, useLocation } from "react-router-dom";
import * as Styled from "./styles";
import { Home, ScrollText } from "lucide-react";

export const Sidebar = () => {
  const location = useLocation();

  console.log(location.pathname, "PATH");
  return (
    <Styled.Wrapper>
      <Link to="/">
        <Styled.IconWrapper selected={location.pathname === "/"}>
          <Home />
        </Styled.IconWrapper>
      </Link>
      <Link to="/invoices">
        <Styled.IconWrapper selected={location.pathname === "/invoices"}>
          <ScrollText />
        </Styled.IconWrapper>
      </Link>
    </Styled.Wrapper>
  );
};
