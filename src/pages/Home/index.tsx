import { GraphCard } from "./GraphCard";
import { GraphChart } from "./GraphChart";
import * as Styled from "./styles";

export const Home = () => {
  return (
    <Styled.Wrapper>
      <Styled.Header>
        <span>
          <strong>Olá, </strong>Guilherme
        </span>
      </Styled.Header>
      <Styled.GraphGroup>
        <GraphCard title="Consumo" value={200} type="kwh" />
        <GraphCard title="Custo" value={200} type="money" />
        <GraphCard title="Custo" value={200} type="money" />
        <GraphCard title="Custo" value={200} type="money" />
      </Styled.GraphGroup>
      <Styled.GraphGroup>
        <GraphChart title="Consumo" value={200} type="kwh" />
        <GraphChart title="Consumo" value={200} type="kwh" />
      </Styled.GraphGroup>
    </Styled.Wrapper>
  );
};
