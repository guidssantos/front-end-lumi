import { render } from "@testing-library/react";
import { Button } from "./";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";

describe("Button Component", () => {
  it("renders with the correct text", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Button color="primary">Test</Button>
      </ThemeProvider>,
    );
    expect(getByText("Test")).toBeInTheDocument();
  });

  it("renders with an icon", () => {
    const TestIcon = () => <svg data-testid="test-icon" />;
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Button color="primary" Icon={TestIcon}>
          Test
        </Button>
      </ThemeProvider>,
    );
    expect(getByTestId("test-icon")).toBeInTheDocument();
  });
});
