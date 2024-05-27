import { Download, ScrollText } from "lucide-react";
import * as Styled from "./styles";
import { Button } from "../../../components/Button";
import { useDownloadInvoice } from "../../../hooks/useInvoices";
import { toast } from "react-toastify";

export const Card = ({ item }: any) => {
  const { mutate, isLoading } = useDownloadInvoice();

  const handleDownloadInvoice = (id: string) => {
    mutate(id, {
      onSuccess: (response) => {
        const { data } = response;
        const url = window.URL.createObjectURL(new Blob([data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `invoice_${id}.pdf`);
        document.body.appendChild(link);
        link.click();
        link.remove();
      },
      onError: () => {
        toast.error("Erro ao baixar fatura!");
      },
    });
  };

  const {
    referenceMonth,
    clientNumber,
    energyCompensatedValue,
    energyElectricValue,
    energySCEValue,
    publicLightingContributionValue,
    id,
  } = item;

  const totalValue =
    energyCompensatedValue +
    energyElectricValue +
    energySCEValue +
    publicLightingContributionValue;
  return (
    <Styled.Wrapper>
      <Styled.LeftWrapper>
        <Styled.IconWrapper>
          <ScrollText />
        </Styled.IconWrapper>
        <Styled.Money>
          R$ <strong>{totalValue.toFixed(2)}</strong>
        </Styled.Money>
        <Styled.DescriptionWrapper>
          <Styled.DescriptionTitle>N° DO CLIENTE</Styled.DescriptionTitle>
          <Styled.DescriptionValue>{clientNumber}</Styled.DescriptionValue>
        </Styled.DescriptionWrapper>
        <Styled.DescriptionWrapper>
          <Styled.DescriptionTitle>MÊS DE REFERÊNCIA</Styled.DescriptionTitle>
          <Styled.DescriptionValue>{referenceMonth}</Styled.DescriptionValue>
        </Styled.DescriptionWrapper>
        <Styled.DescriptionWrapper>
          <Styled.DescriptionTitle>N° DO IDENTIFICADOR</Styled.DescriptionTitle>
          <Styled.DescriptionValue>{id}</Styled.DescriptionValue>
        </Styled.DescriptionWrapper>
      </Styled.LeftWrapper>
      <Styled.RighWrapper>
        <Button
          Icon={Download}
          color="primary"
          onClick={() => handleDownloadInvoice(id)}
          disabled={isLoading}
        >
          Download da fatura
        </Button>
      </Styled.RighWrapper>
    </Styled.Wrapper>
  );
};
