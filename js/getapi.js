export async function getData() {
    let url =
      "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,CAD,EUR&apikey=cc0e87fb7e5579f92c5bb845c2e440397b605d96b199c8ff87e786a5d2131488";
  
    const response = await fetch(url);
    const data = await response.json();
    //console.log(data);
  
    return [parseInt(data.USD), parseInt(data.CAD), parseInt(data.EUR)];
  }