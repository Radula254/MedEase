import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const PieChart = ({ data }) => {
  const options = {
    chart: {
      type: 'pie',
    },
    title: {
      text: 'Revenue Sources',
    },
    series: [
      {
        name: 'Revenue',
        data: data,
        colors: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default PieChart;
