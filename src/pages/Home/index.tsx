import { useState } from "react";
import { FormInput } from "../../components/FormInput";
import {
  useGetDashboardGraphInvoice,
  useGetDashboardInvoice,
} from "../../hooks/useInvoices";
import { GraphCard } from "./GraphCard";
import { GraphChart } from "./GraphChart";
import * as Styled from "./styles";

export const Home = () => {
  const [clientNumber, setClientNumber] = useState<number>();
  const { data, isLoading, error } = useGetDashboardInvoice(clientNumber);
  const { data: dataGraph, isLoading: isLoadingGraph } =
    useGetDashboardGraphInvoice(clientNumber);

  return (
    <Styled.Wrapper>
      <Styled.Header>
        <span>
          <strong>Olá, </strong>Guilherme
        </span>
      </Styled.Header>
      <FormInput
        placeholder="Pesquisar N° do Cliente"
        type="text"
        autoComplete="off"
        onChange={(e) => {
          setClientNumber(
            e.target.value
              ? Number(e.target.value.replace(/\D/g, ""))
              : undefined,
          );
        }}
        value={clientNumber}
      />
      <Styled.GraphGroup>
        <GraphCard
          title="Consumo"
          value={data?.data.consumptionElectricEnergyKWh || 0}
          type="kwh"
        />
        <GraphCard
          title="Energia Compensada"
          value={data?.data.compensatedEnergyKWh || 0}
          type="kwh"
        />
        <GraphCard
          title="Valor Total sem GD"
          value={data?.data.totalValueWithoutGD || 0}
          type="money"
        />
        <GraphCard
          title="Economia GD"
          value={data?.data.gdEconomyValue || 0}
          type="money"
        />
      </Styled.GraphGroup>
      <Styled.GraphGroup>
        <GraphChart
          title="Consumo de Energia (kWh)"
          item={dataGraph?.data}
          type="kwh"
        />
        <GraphChart
          title="Valores por consumo"
          item={dataGraph?.data}
          type="money"
        />
      </Styled.GraphGroup>
    </Styled.Wrapper>
  );
};
