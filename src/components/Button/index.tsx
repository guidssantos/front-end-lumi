import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import * as Styled from "./styles";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
  color: "primary" | "secondary";
  onClick?: () => void;
}
export const Button = ({
  children,
  color = "primary",
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <Styled.Wrapper {...props} color={color} onClick={onClick}>
      <Styled.Title>{children}</Styled.Title>
    </Styled.Wrapper>
  );
};
