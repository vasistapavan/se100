import { useContext, useEffect, useState } from "react";
import CurrencyContext from "./context/CurrencyContext";

function CurrencyConverter() {
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const { currencyFrom, currencyTo } = useContext(CurrencyContext);

  useEffect(() => {
    fetch(
      "https://v6.exchangerate-api.com/v6/a99a65913a5ad77690990bd4/pair/" +
        currencyFrom +
        "/" +
        currencyTo +
        "/" +
        amount
    )
      .then((res) => res.json())
      .then((body) => setConvertedAmount(body["conversion_result"]));
  }, [amount, currencyFrom, currencyTo]);

  return (
    <div className="flex-dropdown">
      <input
        value={amount}
        placeholder="Enter amount"
        className="converter-input"
        onChange={(event) => {
          setAmount(event.target.value);
        }}
      />
      <p>{currencyFrom}</p>
      <p>=</p>
      <p className="converter-result">{amount === "" ? 0 : convertedAmount}</p>
      <p>{currencyTo}</p>
    </div>
  );
}

export default CurrencyConverter;
