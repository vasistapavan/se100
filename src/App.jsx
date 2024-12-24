import { useState } from "react";
import "./App.css";
import CurrencyDropdown from "./components/CurrencyDropdown";
import CurrencyContext from "./context/CurrencyContext";

function App() {
  const [currencyFrom, setCurrencyFrom] = useState("AED");
  const [currencyTo, setCurrencyTo] = useState("AED");

  return (
    <CurrencyContext.Provider
      value={{ currencyFrom, setCurrencyFrom, currencyTo, setCurrencyTo }}
    >
      <h1>Currency Converter</h1>
      <CurrencyDropdown />
    </CurrencyContext.Provider>
  );
}

export default App;
