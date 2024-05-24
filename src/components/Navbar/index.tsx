import { UserProfile } from "./UserProfile";
import * as Styled from "./styles";

export const Navbar = () => {
  return (
    <Styled.Wrapper>
      <img src="logo-cemig.png" alt="Logo Cemig" />
      <UserProfile />
    </Styled.Wrapper>
  );
};
