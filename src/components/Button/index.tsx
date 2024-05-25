import { ButtonHTMLAttributes, DetailedHTMLProps, ElementType } from "react";
import * as Styled from "./styles";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
  color: "primary" | "secondary";
  Icon?: ElementType;
}
export const Button = ({
  children,
  color = "primary",
  Icon,
  ...props
}: ButtonProps) => {
  return (
    <Styled.Wrapper {...props} color={color}>
      <Styled.Title>{children}</Styled.Title>
      {Icon && <Icon size={20} />}
    </Styled.Wrapper>
  );
};
