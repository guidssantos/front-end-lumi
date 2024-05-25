import { X } from "lucide-react";
import * as Styled from "./styles";
import { Button } from "../../../components/Button";
import { FileDropZone } from "../../../components/FileDropzone";
import { useState } from "react";
import { toast } from "react-toastify";
import { usePostInvoice } from "../../../hooks/useInvoices";

interface InvoiceModalProps {
  onClose: () => void;
}

export const InvoiceModal = ({ onClose }: InvoiceModalProps) => {
  const [base64, setBase64] = useState<string | null>("");
  const { mutate, isLoading, error } = usePostInvoice();

  const handleImport = () => {
    if (base64) {
      mutate(base64, {
        onSuccess: () => {
          toast.success("Fatura importada com sucesso!");
          onClose();
        },
        onError: () => {
          toast.error("Erro ao importar fatura!");
        },
      });
    }
  };

  console.log(error, "error");
  return (
    <Styled.Wrapper>
      <Styled.ModalContent>
        <Styled.CloseButton onClick={onClose}>
          <X size={16} />
        </Styled.CloseButton>
        <Styled.Body>
          <FileDropZone setBase64={setBase64} />
          <Button color="secondary" onClick={onClose}>
            Cancelar
          </Button>
          {base64 && (
            <Button onClick={handleImport} disabled={isLoading} color="primary">
              Importar
            </Button>
          )}
        </Styled.Body>
      </Styled.ModalContent>
    </Styled.Wrapper>
  );
};
