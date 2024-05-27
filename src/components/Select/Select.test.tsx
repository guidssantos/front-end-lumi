import { render, fireEvent } from "@testing-library/react";
import { Select } from ".";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";

describe("Select Component", () => {
  const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  const selectedOptions = "option1";

  const onSelectOption = jest.fn();
  const onRemoveAll = jest.fn();

  it("renders options when clicked", () => {
    const { getByTestId, getAllByTestId } = render(
      <ThemeProvider theme={theme}>
        <Select
          placeholder="Select an option"
          options={options}
          selectedOptions={selectedOptions}
          onSelectOption={onSelectOption}
        />
      </ThemeProvider>,
    );
    const selectInput = getByTestId("select-input");
    fireEvent.click(selectInput);
    expect(getAllByTestId("option")).toHaveLength(options.length);
  });

  it("selects an option when clicked", () => {
    const { getByText, getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Select
          placeholder="Select an option"
          options={options}
          selectedOptions={selectedOptions}
          onSelectOption={onSelectOption}
        />
      </ThemeProvider>,
    );
    const selectInput = getByTestId("select-input");
    fireEvent.click(selectInput);

    fireEvent.click(getByText("Option 2"));
    expect(onSelectOption).toHaveBeenCalledWith({
      label: "Option 2",
      value: "option2",
    });
  });

  it("removes all selected options when 'Remove All' button is clicked", () => {
    const { getByText, getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Select
          placeholder="Select an option"
          options={options}
          selectedOptions={selectedOptions}
          onSelectOption={onSelectOption}
          onRemoveAll={onRemoveAll}
        />
      </ThemeProvider>,
    );

    const selectInput = getByTestId("select-input");
    fireEvent.click(selectInput);

    const removeAllButton = getByText("Remover todos");
    fireEvent.click(removeAllButton);

    expect(onRemoveAll).toHaveBeenCalled();
  });
});
