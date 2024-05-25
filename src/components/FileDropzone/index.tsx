import React, { useState } from "react";
import * as Styled from "./styles";
import { Upload } from "lucide-react";

interface FileDropZoneProps {
  setBase64: React.Dispatch<React.SetStateAction<string | null>>;
}
export const FileDropZone = ({ setBase64 }: FileDropZoneProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      const selectedFile = files[0];
      if (selectedFile.type === "application/pdf") {
        convertToBase64(selectedFile);
        setFile(selectedFile);
        setError(null);
      } else {
        setError("Please upload a valid PDF file.");
      }
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const selectedFile = files[0];
      if (selectedFile.type === "application/pdf") {
        convertToBase64(selectedFile);
        setFile(selectedFile);
        setError(null);
      } else {
        setError("Please upload a valid PDF file.");
      }
    }
  };

  const convertToBase64 = (file: File) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64String = (reader.result as string).split(",")[1];
      setBase64(base64String);
    };
    reader.onerror = () => {
      setError("Failed to convert file to Base64.");
    };
  };

  return (
    <Styled.DropZone onDrop={handleDrop} onDragOver={handleDragOver}>
      <input
        type="file"
        accept="application/pdf"
        onChange={handleFileChange}
        style={{ display: "none" }}
        id="fileInput"
      />
      <Upload />
      {!file && (
        <label htmlFor="fileInput">Arraste e solte a fatura aqui</label>
      )}
      {file && (
        <Styled.FileInfo>
          <p>Arquivo: {file.name}</p>
        </Styled.FileInfo>
      )}
      {error && <Styled.Error>{error}</Styled.Error>}
    </Styled.DropZone>
  );
};
