import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,}
from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
)

export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'Bar Chart Tutorial'
      }
    }
  }

  const data = {
    labels: ['Jan', 'Feb', 'march'],
    datasets: [
        {
            label: 'Present',
            data: [25,35,10],
            backgroundcolor: "rgba(255, 99, 132, 0.5)",
        },
        {
            label: 'Absent',
            data: [5,3,8],
            backgroundcolor: "rgba(53, 162, 235, 0.5)",
        }
    ]
  }

export default function Barchart() {
    
    return(
        <div style={{width:600, height:400}}>

        <Bar options={options} data={data} />
        </div>

    );
}