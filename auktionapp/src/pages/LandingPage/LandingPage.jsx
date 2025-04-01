import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./landingpage.css";

const LandingPage = () => {
  const [auctions, setAuctions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    fetch("http://localhost:5000/api/auctions")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP-fel! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setAuctions(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Fel vid hämtning av auktioner:", error);
        setError("Kunde inte ladda auktioner. Försök igen senare.");
        setLoading(false);
      });
  }, []);

  return (   
    <div className="container">
      <h1 className="title">Välkommen till KattAuktion</h1>
      <p className="subtitle">Köp och sälj underbara katter på auktion</p>

      {/* Sökfunktion */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Vad letar du efter?"
          className="search-input"
        />
        <button className="search-button">🔍</button>
      </div>

      {/* Lista av auktioner */}
      <div className="auction-list">
        {loading ? (
          <p>Laddar auktioner...</p>
        ) : error ? (
          <p className="error-message">{error}</p>
        ) : auctions.length > 0 ? (
          auctions.map((auction) => (
            <div key={auction._id} className="auction-item">
              <div
                className="auction-image"
                style={{ backgroundImage: `url(${auction.image || ""})` }}
              ></div>
              <h3 className="auction-title">{auction.object}</h3>
              <p className="auction-description">
                <strong>Beskrivning:</strong> {auction.text}
              </p>
              <p className="auction-date">
                Slutar: {new Date(auction.endTime).toLocaleString()}
              </p>
              <p className="auction-price">
                <strong>{auction.price} kr</strong> | {auction.bids || 0} bud
              </p>
              <p className="auction-user">Användare: {auction.user}</p>
            </div>
          ))
        ) : (
          <p>Inga auktioner tillgängliga just nu.</p>
        )}
      </div>

      {/* Knapp för att skapa ny auktion */}
      <button className="button" onClick={() => navigate("/create-auction")}>
        Skapa ny auktion
      </button>
    </div>
  );
};

export default LandingPage;