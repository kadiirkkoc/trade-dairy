import React, { useEffect, useState } from "react";

export default function Main() {
    

    const [trades,setTrades] = useState([
        { id: "", pair: "" , timeFrame: "" , direction: "", risk: "", profit:"" , pnl: "" , url:"" ,date: "" }
    ])

    function handleInputChange(event,tradeId){

        const {name,value} = event.target

        const updatedTrades = trades.map(trade => {
            if(trade.id === tradeId){
                return{
                    ...trade,
                    [name] : value
                }
            }
            return trade
        })
        setTrades(updatedTrades)
        
    }

    useEffect(function(){

        console.log("trade updated")
    },[trades])

    
    return (
        <div className="trade-table-container">
            <table className="trade-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Pair</th>
                        <th>Time Frame</th>
                        <th>Direction</th>
                        <th>Risk</th>
                        <th>Profit(R)</th>
                        <th>PNL</th>
                        <th>Setup Link</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
          {trades.map((trade) => (
            <tr key={trade.id}>
              <td>
                <input
                  type="text"
                  value={trade.id}
                  onChange={handleInputChange}
                  name="id"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={trade.pair}
                  onChange={handleInputChange}
                  name="pair"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={trade.timeFrame}
                  onChange={handleInputChange}
                  name="timeFrame"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={trade.direction}
                  onChange={handleInputChange}
                  name="direction"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={trade.risk}
                  onChange={handleInputChange}
                  name="risk"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={trade.profit}
                  onChange={handleInputChange}
                  name="profit"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={trade.pnl}
                  onChange={handleInputChange}
                  name="pnl"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={trade.url}
                  onChange={handleInputChange}
                  name="url"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={trade.date}
                  onChange={handleInputChange}
                  name="date"
                />
              </td>
              
            </tr>
          ))}
        </tbody>
                
                
            </table>
        </div>
    )
}

