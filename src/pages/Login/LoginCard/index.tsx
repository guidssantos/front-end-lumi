import { useForm } from "react-hook-form";
import { Button } from "../../../components/Button";
import { FormInput } from "../../../components/FormInput";
import * as Styled from "./styles";
import { useAuth } from "../../../hooks/useAuth";

type LoginFormValues = {
  email: string;
  password: string;
};

const loginFormDefaultValues: LoginFormValues = {
  email: "",
  password: "",
};

export const LoginCard = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ defaultValues: loginFormDefaultValues });

  const { signIn } = useAuth();

  const onSubmit = async (data: LoginFormValues) => {
    signIn(data.email);
  };

  return (
    <Styled.Wrapper>
      <img src="logo-cemig.png" />
      <Styled.LoginForm onSubmit={handleSubmit(onSubmit)}>
        <Styled.InputsWrapper>
          <FormInput
            id="email"
            label="E-mail"
            type="email"
            autoComplete="off"
            error={errors.email?.message}
            register={{
              ...register("email", {
                required: {
                  value: true,
                  message: "required field",
                },
              }),
            }}
          />
          <FormInput
            id="password"
            label="Password"
            autoComplete="off"
            canToggleTextVisibility
            error={errors.password?.message}
            register={{
              ...register("password", {
                required: {
                  value: true,
                  message: "required field",
                },
              }),
            }}
          />
        </Styled.InputsWrapper>

        <Button type="submit" color="primary">
          Entrar
        </Button>
      </Styled.LoginForm>
    </Styled.Wrapper>
  );
};
