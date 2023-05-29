
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Register from "./components/Register";
import Main from "./components/Main";

function App() {

  const [trades, setTrades] = useState(
    () => JSON.parse(localStorage.getItem("trades") || []))  

  const [currentTradeId, setCurrentTradeId] = useState(
    (trades[0] && trades[0].id || "")
  )

  const [showForm, setShowForm] = useState(false)

  useEffect(function () {
    localStorage.setItem("trades", JSON.stringify(trades))
  }, [trades])

  function handleInputChange(event, tradeId) {
    const { name, value } = event.target
    const updatedTrades = trades.map(trade => {
      if (trade.id === tradeId) {
        return {
          ...trade,
          [name]: value
        }
      }
      return trade
    })
    setTrades(updatedTrades)
  }

  function createNewTrade() {
    const newTrade = {
      id: trades.length > 0 ? (trades.length + 1) : 1,
      pair: "",
      timeFrame: "",
      direction: "",
      risk: "",
      profit: "",
      pnl: "",
      url: "",
      date: ""
    }

    setTrades(prevTrades => [...prevTrades, newTrade])
    setCurrentTradeId(newTrade.id)
  }

  function deleteTrade(event,tradeId){
    event.stopPropagation()
    setTrades(oldTrades => oldTrades.filter(trade => 
        trade.id !==  tradeId
      ))
  }

  function findCurrentTrade() {
    return trades.find(trade => {
      return trade.id === currentTradeId
    }) || trades[0]
  }

  function handleSignUp() {
    console.log('Button clicked!');
  }

  return (
    <div className="App">
      <Header/>
      {
        trades.length > 0 ?
          <Main

            trades={trades}
            currentTrade={findCurrentTrade}
            setCurrentTradeId={setCurrentTradeId}
            newTrade={createNewTrade}
            handleChange={handleInputChange}
            setTrades={setTrades}
            deleteTrade={deleteTrade}

          />

          :
          <div className="no-trades">
            {
              showForm ?

                <Register
                  showForm={showForm}
                  setShowForm={setShowForm} />

                :

                <>
                  <h1>You have no trades</h1>
                  <button
                    className="first-trade"
                    onClick={createNewTrade}
                  >
                    Start to create trade
                  </button>
                  <Register
                    showForm={showForm}
                    setShowForm={setShowForm} />
                </>

            }


          </div>
      }
    </div>
  );
}

export default App;
