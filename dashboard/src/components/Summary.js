import React, { useEffect, useState } from "react";
import axios from "axios";

const Summary = () => {
  const [holdings, setHoldings] = useState([]);
  const [balance, setBalance] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSummaryData = async () => {
      try {
        const [balanceRes, holdingsRes] = await Promise.all([
          axios.get("http://localhost:3002/balance"),
          axios.get("http://localhost:3002/allHoldings"),
        ]);

        setBalance(balanceRes.data.amount || 0);
        setHoldings(holdingsRes.data || []);
      } catch (err) {
        console.error("Failed to fetch summary data", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSummaryData();
  }, []);

  if (loading) {
    return <p>Loading summary...</p>;
  }

  // Calculations
  const investment = holdings.reduce(
    (acc, h) => acc + h.qty * h.avg,
    0
  );

  const currentValue = holdings.reduce(
    (acc, h) => acc + h.qty * h.price,
    0
  );

  const pnl = currentValue - investment;
  const pnlPercent = investment
    ? ((pnl / investment) * 100).toFixed(2)
    : 0;

  const isProfit = pnl >= 0;

  return (
    <>
      <div className="username">
        <h6>Hi, User!</h6>
        <hr className="divider" />
      </div>

      {/* EQUITY */}
      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>{balance.toFixed(2)}</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used <span>{investment.toFixed(2)}</span>
            </p>
            <p>
              Opening balance <span>{balance.toFixed(2)}</span>
            </p>
          </div>
        </div>

        <hr className="divider" />
      </div>

      {/* HOLDINGS */}
      <div className="section">
        <span>
          <p>Holdings ({holdings.length})</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className={isProfit ? "profit" : "loss"}>
              {pnl.toFixed(2)}{" "}
              <small>
                {isProfit ? "+" : ""}
                {pnlPercent}%
              </small>
            </h3>
            <p>P&amp;L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span>{currentValue.toFixed(2)}</span>
            </p>
            <p>
              Investment <span>{investment.toFixed(2)}</span>
            </p>
          </div>
        </div>

        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;
