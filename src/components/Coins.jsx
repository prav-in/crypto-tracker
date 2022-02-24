import React from "react";

import "./css/Coins.css";

export default function Coins({
  name,
  price,
  image,
  symbol,
  volume,
  priceChange,
  marketCap,
}) {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="coin" />
          <h1>{name}</h1>
          <p className="coin-symbol">{symbol}</p>
        </div>

        <div className="coin-data">
          <p className="coin-price">₹ {price}</p>
          <p className="coin-volume">₹ {volume.toLocaleString()} </p>

          <p
            className={
              priceChange < 0 ? "coin-percent red" : "coin-percent green"
            }
          >
            {priceChange.toFixed(2)}%
          </p>
          <p className="coin-market-cap">₹ {marketCap.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}
