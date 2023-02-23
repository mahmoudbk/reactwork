
import { useState,useEffect } from "react";

import CurrencyRow from "./CurrencyRow";
import axios from "axios";



function App() {
  const [currency,setCurrencyData] = useState(null);
  const fromCurrency = "USD";
  const toCurrency = "EUR";
  useEffect(() => {
   

    axios.get(`https://openexchangerates.org/api/convert/${fromCurrency}/${toCurrency}`)
      .then(res => {
        console.log(res.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);


  
  return (
    <>
    <div className="container">
    <h1>Convert currency</h1>
    <CurrencyRow/>
    <div>==</div>
    <CurrencyRow/>
    </div>
    </>
  );
}

export default App;
