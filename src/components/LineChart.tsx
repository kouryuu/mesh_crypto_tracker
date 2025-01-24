import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
} from 'chart.js';
import 'chartjs-adapter-date-fns';
import { Line } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale
);

export const options = {
  elements: {
    line: {
      tension: 0.1,
    },
  },
  scales: {
    x: {
      type: 'time',
      time: {
        unit: 'day',
        displayFormats: {
          day: 'MMM d'
        }
      },
      ticks: {
        maxRotation: 45,
        minRotation: 45
      }
    },
    y: {
      beginAtZero: false,
      ticks: {
        callback: (value: number) => `$${value.toLocaleString('en-US')}`
      }
    }
  },
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
};





export interface LineChartProps {
  mainLabel: string;
  dataLabels: Array<string>;
  data: Array<Number>;
}
export default function LineChart(props: LineChartProps) {
    const data = {
        labels: props.dataLabels,
        datasets: [
          {
            label: props.mainLabel,
            data: props.data,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          }
        ],
      };
  return <Line options={options} data={data} />;
}