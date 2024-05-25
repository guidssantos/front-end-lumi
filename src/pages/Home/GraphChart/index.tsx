import * as Styled from "./styles";
import Chart from "react-apexcharts";
import { useMemo } from "react";

interface GraphChartProps {
  title: string;
  item: any[];
  type: "money" | "kwh";
}

export const GraphChart = ({ title, item, type }: GraphChartProps) => {
  const { series, categories } = useMemo(() => {
    if (!Array.isArray(item)) {
      return { series: [], categories: [] };
    }

    const sortedData = item.sort((a, b) => {
      const months = {
        JAN: 1,
        FEV: 2,
        MAR: 3,
        ABR: 4,
        MAI: 5,
        JUN: 6,
        JUL: 7,
        AGO: 8,
        SET: 9,
        OUT: 10,
        NOV: 11,
        DEZ: 12,
      };

      return months[a.referenceMonth] - months[b.referenceMonth];
    });

    const seriesData = sortedData.map((data: any) => {
      if (type === "kwh") {
        return data.consumptionElectricEnergyKWh;
      } else if (type === "money") {
        return data.totalValueWithoutGD.toFixed(2);
      }
    });

    const categoriesData = sortedData.map((data: any) => data.referenceMonth);

    return { series: seriesData, categories: categoriesData };
  }, [item, type]);

  const options = {
    chart: {
      type: "area",
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
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
      categories: categories,
      labels: {
        style: {
          colors: "#D3FFD3",
          fontSize: "12px",
        },
      },
      tooltip: {
        enabled: false,
      },
    },
    yaxis: {
      labels: {
        formatter: (value: number | string) => {
          if (type === "money") {
            return `R$ ${value}`;
          } else {
            return value;
          }
        },
        style: {
          colors: "#D3FFD3",
          fontSize: "12px",
        },
      },
    },
    tooltip: {
      custom: function ({ series, seriesIndex, dataPointIndex }: any) {
        return `<div class="custom-tooltip">
        <span>${type === "money" ? "R$:" : ""} ${series[seriesIndex][dataPointIndex]} ${type === "money" ? "" : "/kWh"}</span>
        </div>`;
      },
    },
  };

  return (
    <Styled.Wrapper>
      <h1>{title}</h1>
      <Chart
        options={options}
        series={[{ data: series }]}
        type="area"
        height={350}
      />
    </Styled.Wrapper>
  );
};
