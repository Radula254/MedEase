import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const BarChart = ({ data }) => {
  const options = {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Staff Distribution',
    },
    xAxis: {
      categories: ['Doctors', 'Nurses', 'Receptionists', 'Lab Techs', 'Pharmacists'],
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Number of Staff',
      },
    },
    series: [
      {
        name: 'Staff',
        data: data,
        color: '#4f46e5',
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default BarChart;
