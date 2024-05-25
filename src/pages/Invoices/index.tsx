import { Upload } from "lucide-react";
import { Button } from "../../components/Button";
import { Card } from "./Card";
import * as Styled from "./styles";
import { useModal } from "../../hooks/useModal";
import { InvoiceModal } from "./InvoiceModal";
import { InPortal } from "react-reverse-portal";
import { useGetInvoice } from "../../hooks/useInvoices";

export const Invoices = () => {
  const { openedModals, openModal, closeModal } = useModal();
  const { data: invoices, isLoading, isError, refetch } = useGetInvoice();

  return (
    <Styled.Wrapper>
      <Styled.Header>
        <span>
          <strong>Faturas</strong>
        </span>
      </Styled.Header>
      <Styled.Filters>
        <Button
          color="primary"
          onClick={() => openModal("importInvoice")}
          Icon={Upload}
        >
          Importar fatura
        </Button>
      </Styled.Filters>
      <Styled.GraphGroup>
        {isError && (
          <div>
            <p>
              Erro ao carregar as faturas. Por favor, tente novamente mais
              tarde.
            </p>
            <Button color="primary" onClick={() => refetch()}>
              Tentar novamente
            </Button>
          </div>
        )}
        {invoices?.data.length > 0 &&
          invoices?.data.map((item) => <Card item={item} />)}
      </Styled.GraphGroup>
      {openedModals.includes("importInvoice") && (
        <InvoiceModal onClose={() => closeModal("importInvoice")} />
      )}
    </Styled.Wrapper>
  );
};
