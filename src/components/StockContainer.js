import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, handleClick }) {
  const stockList = stocks.map(s => <Stock key={s.id} id={s.id} handleClick={handleClick} stock={s}></Stock>)
  return (
    <div>
      <h2>Stocks</h2>
      {stockList}
    </div>
  );
}

export default StockContainer;
