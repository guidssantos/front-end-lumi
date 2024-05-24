import * as Styled from "./styles";

interface GraphCardProps {
  title: string;
  value: number | string;
  type: "money" | "kwh";
}

export const GraphCard = ({ title, value, type }: GraphCardProps) => {
  return (
    <Styled.Wrapper>
      <h1>{title}</h1>
      {type === "money" ? (
        <h2>
          <strong>R$ {value}</strong>
        </h2>
      ) : (
        <h2>
          <strong>{value}</strong>/kWh
        </h2>
      )}
    </Styled.Wrapper>
  );
};
