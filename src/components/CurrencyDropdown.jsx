import { useContext, useEffect, useState } from "react";
import "./CurrencyStyling.css";
import CurrencyConverter from "./CurrencyCoverter";
import CurrencyContext from "../context/CurrencyContext";

function CurrencyDropdown() {
  const [currencyList, setCurrencyList] = useState([]);
  const { currencyFrom, setCurrencyFrom, currencyTo, setCurrencyTo } =
    useContext(CurrencyContext);

  useEffect(() => {
    fetch("https://v6.exchangerate-api.com/v6/a99a65913a5ad77690990bd4/codes")
      .then((res) => res.json())
      .then((body) => setCurrencyList(body["supported_codes"]));
  }, []);

  return (
    <div>
      <div className="flex-dropdown">
        <p>I want to covert</p>
        <select
          name="currency"
          id="currencySelect"
          onChange={(event) => {
            setCurrencyFrom(event.target.value);
          }}
          value={currencyFrom}
        >
          {currencyList.map((currencyDetails) => (
            <option key={currencyDetails[0]} value={currencyDetails[0]}>
              {currencyDetails[1]}
            </option>
          ))}
        </select>
        <p>to</p>
        <select
          name="currency"
          id="currencySelect"
          onChange={(event) => {
            setCurrencyTo(event.target.value);
          }}
          value={currencyTo}
        >
          {currencyList.map((currencyDetails) => (
            <option key={currencyDetails[0]} value={currencyDetails[0]}>
              {currencyDetails[1]}
            </option>
          ))}
        </select>
      </div>
      <CurrencyConverter />
    </div>
  );
}

export default CurrencyDropdown;
