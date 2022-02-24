import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Coins from "./components/Coins";
import { useSpring, animated } from "react-spring";
import HeadRow from "./components/HeadRow";
import ToggleSwitch from "./components/ToggleSwitch";

const API =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false";

function App() {
  // hooks
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [dark, setDark] = useState(false);

  const anim = useSpring({
    from: { scaleY: 0 },
    to: { scaleY: 1 },
    config: { duration: 600 },
  });

  useEffect(() => {
    axios
      .get(API)
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  // functions

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={dark ? "crypto-app crypto-dark" : "crypto-app"}>
      <ToggleSwitch setDark={setDark} />
      <div className={dark ? "crypto-search search-dark" : "crypto-search"}>
        <h1 className="crypto-heading">Crypto Price Tracker</h1>
        <form>
          <input
            onChange={handleSearch}
            type="text"
            placeholder="Seach Any Coin..."
            className="crypto-input"
          ></input>
        </form>
      </div>
      <HeadRow dark={dark} />
      <animated.div style={anim} className="coin-list">
        {filteredCoins.map((coin) => (
          <Coins
            key={coin.id}
            name={coin.id}
            image={coin.image}
            price={coin.current_price}
            symbol={coin.symbol}
            volume={coin.circulating_supply}
            priceChange={coin.price_change_percentage_24h}
            marketCap={coin.market_cap}
          />
        ))}
      </animated.div>
    </div>
  );
}

export default App;
