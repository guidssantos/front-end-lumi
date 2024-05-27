import { Upload } from "lucide-react";
import { Button } from "../../components/Button";
import { Card } from "./Card";
import * as Styled from "./styles";
import { useModal } from "../../hooks/useModal";
import { InvoiceModal } from "./InvoiceModal";
import { useGetInvoice } from "../../hooks/useInvoices";
import { FormInput } from "../../components/FormInput";
import { useState } from "react";
import { Select } from "../../components/Select";
import { options } from "./constants";

export const Invoices = () => {
  const [filters, setFilters] = useState<any>({});
  const { openedModals, openModal, closeModal } = useModal();
  const {
    data: invoices,
    isError,
    refetch,
  } = useGetInvoice({
    ...filters,
  });

  const onSelectIndividual = (newOption: any, optionType: any) => {
    setFilters((prevFilters: any) => {
      const isAlreadySelected = prevFilters[optionType] === newOption.value;
      if (isAlreadySelected) {
        return {
          ...prevFilters,
          [optionType]: undefined,
        };
      } else {
        return {
          ...prevFilters,
          [optionType]: newOption.value,
        };
      }
    });
  };

  return (
    <Styled.Wrapper>
      <Styled.Header>
        <span>
          <strong>Faturas</strong>
        </span>
      </Styled.Header>
      <Styled.Filters>
        <Styled.InputsWrapper>
          <FormInput
            placeholder="Pesquisar N° do Cliente"
            type="text"
            autoComplete="off"
            onChange={(e) => {
              setFilters((prevState: any) => {
                return {
                  ...prevState,
                  clientNumber: e.target.value
                    ? Number(e.target.value.replace(/\D/g, ""))
                    : undefined,
                };
              });
            }}
            value={filters.clientNumber}
          />
          <Select
            placeholder="Mês"
            individual
            options={options.referenceMonth}
            selectedOptions={filters.referenceMonth}
            onSelectOption={(options: any) => {
              onSelectIndividual(options, "referenceMonth");
            }}
          />
        </Styled.InputsWrapper>

        <div>
          <Button
            color="primary"
            onClick={() => openModal("importInvoice")}
            Icon={Upload}
          >
            Importar fatura
          </Button>
        </div>
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
          invoices?.data.map((item: any) => <Card item={item} />)}
      </Styled.GraphGroup>
      {openedModals.includes("importInvoice") && (
        <InvoiceModal
          onClose={() => closeModal("importInvoice")}
          refetch={refetch}
        />
      )}
    </Styled.Wrapper>
  );
};
