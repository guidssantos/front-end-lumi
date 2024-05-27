import { Link, useLocation } from "react-router-dom";
import * as Styled from "./styles";
import { Home, LogOut, ScrollText } from "lucide-react";
import { useAuth } from "../../hooks/useAuth";

export const Sidebar = () => {
  const location = useLocation();
  const { signOut } = useAuth();

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
      <Styled.IconWrapper onClick={signOut}>
        <LogOut />
      </Styled.IconWrapper>
    </Styled.Wrapper>
  );
};
