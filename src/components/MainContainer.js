import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [selectType, setSelectType] = useState("Tech")
  const [stocks, setStocks] = useState([])
  const [portfolio, setPortfolio] = useState([])

  function handleSelectChange(e) {
    setSelectType(e.target.value)
  }

  useEffect(() => {
    fetch("http://localhost:3003/stocks")
      .then(res => res.json())
      .then(data => setStocks(data))
  }, [])

  function handlePortfolio(id) {
    const portfolioList = stocks.filter(st => st.id === id)
    console.log(portfolioList)

    const portArr = portfolio.push(portfolioList.flat())
    setPortfolio([...portfolio, portArr])
    console.log(portfolio)
  }
  return (
    <div>
      <SearchBar onSelect={handleSelectChange} />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} handleClick={handlePortfolio} />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
