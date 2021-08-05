import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [selectType, setSelectType] = useState("Tech")
  const [sortBy, setSortBy] = useState("Alphabetically")
  const [stocks, setStocks] = useState([])
  const [portfolio, setPortfolio] = useState([])



  useEffect(() => {
    fetch("http://localhost:3003/stocks")
      .then(res => res.json())
      .then(data => setStocks(data))
  }, [])

  function handlePortfolio(stockToAdd) {

    const pr = [...portfolio, stockToAdd]

    setPortfolio(() => pr)
    console.log(portfolio)
  }
  function handleSellingStock(stock) {
    setPortfolio(() => portfolio.filter(i => i.id !== stock.id))
  }
  function handleSelectChange(e) {
    setSelectType(e.target.value)

  }
  function handleSort(e) {
    setSortBy(e.target.value)
  }
  const sortedStocks = [...stocks].sort((a, b) => {

    if (sortBy === "Alphabetically")
      return a.name.localeCompare(b.name)
    else {
      return a.price - b.price
    }
  })
  const newStocksArr = sortedStocks.filter(stock => stock.type === selectType)
  return (
    <div>
      <SearchBar onSelect={handleSelectChange} sortedStocks={sortedStocks} sortBy={sortBy} onSort={handleSort} />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={newStocksArr} handleClick={handlePortfolio} />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} handleClick={handleSellingStock} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
