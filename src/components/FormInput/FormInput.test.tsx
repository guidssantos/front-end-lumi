import { render, fireEvent } from "@testing-library/react";
import { FormInput } from ".";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";

describe("FormInput Component", () => {
  it("renders without crashing", () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <FormInput />
      </ThemeProvider>,
    );
    expect(getByTestId("form-input-container")).toBeInTheDocument();
  });

  it("renders label if provided", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <FormInput label="Username" />
      </ThemeProvider>,
    );
    expect(getByText("Username")).toBeInTheDocument();
  });

  it("renders error message if provided", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <FormInput error="Required field" />
      </ThemeProvider>,
    );
    expect(getByText("Required field")).toBeInTheDocument();
  });

  it("toggles password visibility when icon is clicked", () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <FormInput canToggleTextVisibility />
      </ThemeProvider>,
    );
    const input = getByTestId("form-input") as HTMLInputElement;
    const toggleIcon = getByTestId(
      "form-input-toggle-visibility-icon",
    ) as HTMLElement;

    expect(input.type).toBe("password");

    fireEvent.click(toggleIcon);
    expect(input.type).toBe("text");

    fireEvent.click(toggleIcon);
    expect(input.type).toBe("password");
  });

  it("does not toggle password visibility if canToggleTextVisibility is false", () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <FormInput type="password" canToggleTextVisibility />
      </ThemeProvider>,
    );
    const input = getByTestId("form-input") as HTMLInputElement;
    const toggleIcon = getByTestId(
      "form-input-toggle-visibility-icon",
    ) as HTMLElement;

    expect(input.type).toBe("password");

    fireEvent.click(toggleIcon);
    expect(input.type).toBe("text");
  });
});
