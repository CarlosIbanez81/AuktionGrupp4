import React, { useEffect, useState } from "react";
import "./landingpage.css";

const LandingPage = () => {
  const [auctions, setAuctions] = useState([]);

  useEffect(() => {
    fetch("/api/auctions") // Ändra URL till din backend
      .then((response) => response.json())
      .then((data) => setAuctions(data))
      .catch((error) => console.error("Fel vid hämtning av auktioner:", error));
  }, []);

  return (
    <div className="container">
      <h1 className="title">Välkommen till KattAuktion</h1>
      <p className="subtitle">Köp och sälj underbara katter på auktion</p>
      
      {/* Sökfunktion */}
      <div className="search-container">
        <input type="text" placeholder="Vad letar du efter?" className="search-input" />
        <button className="search-button">🔍</button>
      </div>
      
      {/* Lista av auktioner */}
      <div className="auction-list">
        {auctions.length > 0 ? (
          auctions.map((auction) => (
            <div key={auction.id} className="auction-item">
              <div className="auction-image" style={{ backgroundImage: `url(${auction.image})` }}></div>
              <h3 className="auction-title">{auction.title}</h3>
              <p className="auction-date">{auction.endTime}</p>
              <p className="auction-price"><strong>{auction.price} kr</strong> | {auction.bids} bud</p>
            </div>
          ))
        ) : (
          <p>Laddar auktioner...</p>
        )}
      </div>
      
      {/* Knapp för att skapa ny auktion */}
      <button className="button">Skapa ny auktion</button>
    </div>
  );
};

export default LandingPage;
