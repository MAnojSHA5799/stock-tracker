import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';

import './style.css';

function App() {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  // console.log(data)
  // console.log(data)

  const url1 = "https://retoolapi.dev/gDa8uC/data";
  const url2 = "https://retoolapi.dev/o5zMs5/data";

  useEffect(() => {
    fetch(url1)
      .then(response => response.json())
      .then(json => {
        console.log("url1", json);
        setData(json);
      });

    fetch(url2)
      .then(response => response.json())
      .then(json => {
        console.log("url2", json);
        setData1(json);
      });
  }, []);

  useEffect(() => {
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'line', 
      data: {
        labels: data.map(item => item.Label),
        datasets: [
          {
            label: 'X Data',
            data: data.map(item => parseFloat(item.RandomNumber)),
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          },
          {
            label: 'Y Data',
            data: data1.map(item => parseFloat(item.RandomNumber)),
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          }
        ]
      },
    });

    return () => {
      myChart.destroy();
    };
  }, [data, data1]);

  return (
    <div className="App">
      <h1>Mini Stock Price Tracker</h1>
      <canvas id="myChart" width="400" height="200"></canvas>
    </div>
  );
}

export default App;
