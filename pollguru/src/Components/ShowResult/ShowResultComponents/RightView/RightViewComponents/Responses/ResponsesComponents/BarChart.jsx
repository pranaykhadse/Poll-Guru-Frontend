import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    title: {
      display: true,
      font:{
        size:25
      }
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  }
};


function BarChart({pollingQuizQuestionAnswers}) {
    let [pollingAnswersArray,setPollingAnswersArray] = useState([])

    useEffect(()=>{
      let numberCountObject = {}
      for(let i=0; i<pollingQuizQuestionAnswers.length; i++){
        if(numberCountObject[pollingQuizQuestionAnswers[i]['answer']]==undefined){
          numberCountObject[pollingQuizQuestionAnswers[i]['answer']] = 1
        }else{
          numberCountObject[pollingQuizQuestionAnswers[i]['answer']]++
        }
      }
      let pollingAnswersArray = []
      for(let keys in numberCountObject){
          let obj = {}
          obj['answer'] = keys
          obj['count'] = numberCountObject[keys]
          pollingAnswersArray.push(obj)
      }
      setPollingAnswersArray(pollingAnswersArray)
    },[])


  return <Bar options={options} style={{color:'red',height:'80vh',margin:'-20px auto 0px'}} data={{
    labels : pollingAnswersArray.map((el)=>{
      return el['answer']
    }),
    datasets: [
      {
        label: ['Number Percentage'],
        data: pollingAnswersArray.map((el)=>{
          return el['count']*100/pollingQuizQuestionAnswers.length
        }),
        backgroundColor: `rgb(${Math.ceil(Math.random()*255)} ${Math.ceil(Math.random()*255)} ${Math.ceil(Math.random()*255)})`,
      }
    ]
  }} />;
}

export default BarChart
