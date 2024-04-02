import { useState, useEffect } from 'react';
import './card.css'; 

const CryptoPrices = () => {
  const [bitcoinPrices, setBitcoinPrices] = useState(null);
  const [fetchTime, setFetchTime] = useState(null);

  useEffect(() => {
    const fetchBitcoinPrices = async () => {
      try {
        const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
        const data = await response.json();
        setBitcoinPrices(data.bpi);
        setFetchTime(data.time.updated);
      } catch (error) {
        console.error('Error fetching Bitcoin prices:', error);
      }
    };

    fetchBitcoinPrices();
  }, []);

  const renderPrices = () => {
    if (!bitcoinPrices) {
      return <div>Loading...</div>;
    }

    return Object.keys(bitcoinPrices).map((currency) => (
      <div key={currency} className="card">
        <h3>{bitcoinPrices[currency].description}</h3>
        <p>{currency}: {bitcoinPrices[currency].rate}</p>
      </div>
    ));
  };

  return (
    <div className="crypto-prices">
      <h2>Cryptocurrency Prices</h2>
      <p>Last updated: {fetchTime}</p>
      <div className="cards-container">{renderPrices()}</div>
    </div>
  );
};

export default CryptoPrices;
