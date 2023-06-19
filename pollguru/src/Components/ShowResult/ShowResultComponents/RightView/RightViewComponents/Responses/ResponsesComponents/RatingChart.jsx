import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import axios from 'axios'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    },
    title: {
      display: true,
      font : {
        size:25
      },
      text: 'End Year Line Graph',
    },
  },
};



function Rating() {
    let [endYearData,setEndYearData] = useState([])
    let labels = endYearData.map((el)=>{
        return el['_id']
    })
    useEffect(()=>{
        axios.get('http://localhost:8000/end-year').then((res)=>{
            let data = res.data.filter((el)=>{
                if(el!==""){
                    return el['_id']
                }
            })
            setEndYearData(data)
        })
    },[])
  return (<Line options={options} data={{
    labels,
    datasets: [
      {
        fill: true,
        label: 'End Year Count',
        data: endYearData.map((el) => el.count),
        borderColor: '#808080',
        backgroundColor: `rgb(${Math.floor(Math.random()*255)} ${Math.floor(Math.random()*255)} ${Math.floor(Math.random()*255)})`,
      },
    ],
  }} />)
}

export default Rating
