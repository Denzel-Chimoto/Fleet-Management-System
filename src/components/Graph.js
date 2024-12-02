import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
} from 'chart.js';

// Register chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const Graph = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May'], // X-axis labels
        datasets: [
            {
                label: 'Active Vehicles',
                data: [12, 19, 3, 5, 2], // Data for the graph
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
            {
                label: 'Vehicles Under Maintenance',
                data: [5, 9, 7, 2, 4],
                backgroundColor: 'rgba(153, 102, 255, 0.6)',
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
        },
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div style={{ width: '70%', margin: '0 auto' }}>
            <h3>Vehicle Statistics</h3>
            <Bar data={data} options={options} />
        </div>
    );
};

export default Graph;
