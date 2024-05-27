import { render, fireEvent } from "@testing-library/react";
import { FileDropZone } from ".";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";

describe("FileDropZone Component", () => {
  it("renders without crashing", () => {
    const setBase64 = jest.fn();
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <FileDropZone setBase64={setBase64} />
      </ThemeProvider>,
    );
    expect(getByText("Arraste e solte a fatura aqui")).toBeInTheDocument();
  });

  it("displays file name when file is selected", () => {
    const setBase64 = jest.fn();
    const { getByLabelText, getByText } = render(
      <ThemeProvider theme={theme}>
        <FileDropZone setBase64={setBase64} />
      </ThemeProvider>,
    );
    const file = new File(["(⌐□_□)"], "test.pdf", { type: "application/pdf" });
    fireEvent.change(getByLabelText("Arraste e solte a fatura aqui"), {
      target: { files: [file] },
    });
    expect(getByText("Arquivo: test.pdf")).toBeInTheDocument();
  });

  it("displays error message for non-PDF files", () => {
    const setBase64 = jest.fn();
    const { getByLabelText, getByText } = render(
      <ThemeProvider theme={theme}>
        <FileDropZone setBase64={setBase64} />
      </ThemeProvider>,
    );
    const file = new File(["(⌐□_□)"], "test.txt", { type: "text/plain" });
    fireEvent.change(getByLabelText("Arraste e solte a fatura aqui"), {
      target: { files: [file] },
    });
    expect(getByText("Please upload a valid PDF file.")).toBeInTheDocument();
  });

  it("displays error message for failed file conversion", () => {
    const setBase64 = jest.fn();
    const { getByLabelText, getByText } = render(
      <ThemeProvider theme={theme}>
        <FileDropZone setBase64={setBase64} />
      </ThemeProvider>,
    );
    const file = new File(["(⌐□_□)"], "test.pdf", { type: "application/text" });

    const readAsDataURLMock = jest.fn();
    const readerMock = {
      readAsDataURL: readAsDataURLMock,
      result: null,
      onload: null,
      onerror: () => {},
    } as unknown as FileReader;

    jest.spyOn(global, "FileReader").mockImplementation(() => readerMock);

    fireEvent.change(getByLabelText("Arraste e solte a fatura aqui"), {
      target: { files: [file] },
    });
    expect(getByText("Please upload a valid PDF file.")).toBeInTheDocument();
  });
});
