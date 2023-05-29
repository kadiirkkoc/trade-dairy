import React from "react";

export default function Main(props) {
  
  const handleAddTrade = () => {
    props.newTrade()
  };

  const handleDeleteTrade = () => {
    props.deleteTrade()
  }
  

  return (
    <div className="main-container">
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
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {props.trades.map((trade) => (
            <tr key={trade.id}>
              <td>
                <input
                  type="text"
                  value={trade.id}
                  onChange={(event) =>
                    props.handleChange(event, trade.id)
                  }
                  name="id"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={trade.pair}
                  onChange={(event) =>
                    props.handleChange(event, trade.id)
                  }
                  name="pair"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={trade.timeFrame}
                  onChange={(event) =>
                    props.handleChange(event, trade.id)
                  }
                  name="timeFrame"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={trade.direction}
                  onChange={(event) =>
                    props.handleChange(event, trade.id)
                  }
                  name="direction"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={trade.risk}
                  onChange={(event) =>
                    props.handleChange(event, trade.id)
                  }
                  name="risk"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={trade.profit}
                  onChange={(event) =>
                    props.handleChange(event, trade.id)
                  }
                  name="profit"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={trade.pnl}
                  onChange={(event) =>
                    props.handleChange(event, trade.id)
                  }
                  name="pnl"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={trade.url}
                  onChange={(event) =>
                    props.handleChange(event, trade.id)
                  }
                  name="url"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={trade.date}
                  onChange={(event) =>
                    props.handleChange(event, trade.id)
                  }
                  name="date"
                />
              </td>
              <td>
                <div className="add-trade-section">
                  <button className="add-trade-btn" onClick={handleAddTrade}>
                           +
                  </button>
                </div>
                <div className="add-trade-section">
                  <button className="delete-trade-btn" onClick={(event) => props.deleteTrade(event,trade.id)}>
                           -
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
}
