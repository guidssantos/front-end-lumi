import * as Styled from "./styles";
import Chart from "react-apexcharts";
interface GraphChartProps {
  title: string;
  value: number | string;
  type: "money" | "kwh";
}

export const GraphChart = ({ title, value, type }: GraphChartProps) => {
  const series = [
    {
      name: "Série 1",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
  ];

  const options = {
    chart: {
      type: "area",
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 3,
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "horizontal",
        shadeIntensity: 0.5,
        gradientToColors: ["#D3FFD3"],
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 1,
        stops: [0, 100],
      },
    },
    colors: ["#D3FFD3"],
    xaxis: {
      type: "datetime",
      categories: [
        "2022-09-19T00:00:00.000Z",
        "2022-09-20T00:00:00.000Z",
        "2022-09-21T00:00:00.000Z",
        "2022-09-22T00:00:00.000Z",
        "2022-09-23T00:00:00.000Z",
        "2022-09-24T00:00:00.000Z",
        "2022-09-25T00:00:00.000Z",
      ],
      labels: {
        style: {
          colors: "#D3FFD3",
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#D3FFD3",
          fontSize: "12px",
        },
      },
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  };
  return (
    <Styled.Wrapper>
      <h1>{title}</h1>
      <Chart options={options} series={series} type="area" height={350} />
    </Styled.Wrapper>
  );
};
