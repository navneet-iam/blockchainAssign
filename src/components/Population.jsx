import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );


const PopulationGraph = () => {
  const [populationData, setPopulationData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
        const data = await response.json();
        setPopulationData(data.data);
        console.log("data", data);
      } catch (error) {
        console.error('Error fetching population data:', error);
      }
    };

    fetchData();
  }, []);

  const renderGraph = () => {
    if (!populationData) {
      return <div>Loading...</div>;
    }

    const labels = populationData.map((item) => item.Year);
    const populations = populationData.map((item) => item.Population);

    const data = {
      labels: labels.reverse(),
      datasets: [
        {
          label: 'Population',
          data: populations.reverse(),
          fill: false,
          borderColor: 'rgba(75, 192, 192, 1)',
        },
      ],
    };

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'left',
          },
          title: {
            display: true,
            text: '',
          },
        },
      };

    return <Line data={data} options={options} />;
  };

  return (
    <div className="graph-container">
      <h2>Population Data Over Years</h2>
      {renderGraph()}
    </div>
  );
};

export default PopulationGraph;
