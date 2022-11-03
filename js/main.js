/*
const clearChart  = document.getElementById("btnClear");
clearChart.addEventListener('click', () =>{
    console.log('Hola');
    removeData();
    
});
*/
const updateChart = document.getElementById("btnUpdate");
updateChart.addEventListener("click", () => {
  removeData();
  addData();
});

async function addData() {
  let url =
    "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,CAD,EUR&apikey=cc0e87fb7e5579f92c5bb845c2e440397b605d96b199c8ff87e786a5d2131488";

  const response = await fetch(url);
  const data = await response.json();

  console.log(data);

  let usa = parseInt(data.USD);
  let can = parseInt(data.CAD);
  let eur = parseInt(data.EUR);

  myCharter.data.labels.push("USA($" + usa + " Dlls.)");
  myCharter.data.datasets.forEach((dataset) => {
    dataset.data.push(usa);
  });

  myCharter.data.labels.push("CAN($" + can + " Dlls. can.)");
  myCharter.data.datasets.forEach((dataset) => {
    dataset.data.push(can);
  });

  myCharter.data.labels.push("EUR $" + eur);
  myCharter.data.datasets.forEach((dataset) => {
    dataset.data.push(eur);
  });

  myCharter.update();
}

function removeData() {
  //console.log(myCharter.data);
  for (let i = 0; i < 3; i++) {
    myCharter.data.labels.pop();
    myCharter.data.datasets.forEach((dataset) => {
      dataset.data.pop();
    });
  }
  myCharter.update();
}

import { getData } from "./getapi.js";
let datos = await getData();

//console.log(datos);
let usa = datos[0];
let can = datos[1];
let eur = datos[2];

let ChartData = {
  type: "polarArea",
  data: {
    labels: [
      "USA($" + usa + " Dlls.)",
      "CAN($" + can + " Dlls. can.)",
      "EUR $" + eur,
    ],
    datasets: [
      {
        label: "Bitcoin Value",
        data: [usa, can, eur],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(75, 192, 192)",
          "rgb(255, 205, 86)",
        ],
      },
    ],
  },
  options: {},
};

const ctx = document.getElementById("myChart").getContext("2d");
const myCharter = new Chart(ctx, ChartData);
