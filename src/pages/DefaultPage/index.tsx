import { Outlet } from "react-router-dom";
import * as Styled from "./styles";
import { Navbar } from "../../components/Navbar";

export const DefaultPage = () => {
  return (
    <Styled.Wrapper>
      <Navbar />
      <Outlet />
    </Styled.Wrapper>
  );
};
