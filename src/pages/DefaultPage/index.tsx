import { Outlet } from "react-router-dom";
import * as Styled from "./styles";
import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";

export const DefaultPage = () => {
  return (
    <Styled.Container>
      <Sidebar />
      <Styled.Wrapper>
        <Navbar />
        <Outlet />
      </Styled.Wrapper>
    </Styled.Container>
  );
};
