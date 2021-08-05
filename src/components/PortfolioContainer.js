import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolio, handleClick }) {
  console.log(portfolio)
  return (
    <div>
      <h2>My Portfolio</h2>
      {
        portfolio.map(p => <Stock key={p.id} stock={p} handleClick={handleClick}></Stock>)
      }
    </div>
  );
}

export default PortfolioContainer;
