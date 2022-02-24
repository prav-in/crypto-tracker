import React from "react";
import "./css/Coins.css";

export default function Coins({ dark }) {
  return (
    <div
      className={
        dark
          ? "coin-container head-container-dark"
          : "coin-container head-container"
      }
    >
      <div className="coin-row ">
        <div className="coin">
          <h1>Coin</h1>
          <p className="coin-symbol">Symbol</p>
        </div>

        <div className="coin-data">
          <p className="coin-price">Price</p>
          <p className="coin-volume">Volume </p>
          <p>Price Change 24h</p>
          <p className="coin-market-cap">Market Capital</p>
        </div>
      </div>
    </div>
  );
}
