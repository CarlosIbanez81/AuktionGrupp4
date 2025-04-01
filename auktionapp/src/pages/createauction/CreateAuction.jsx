import React from "react";
import "./CreateAuction.css";
import { useState } from "react";

const CreateAuction = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [formData, setFormData] = useState({
    user: "",
    object: "",
    text: "",
    price: "",
    duration: 7,
  });

  const handeleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    console.log(formData);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/auctions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Något gick fel vid skapandet av auktionen");
      }
      const data = await response.json();
      console.log("Auktion skapad:", data);
    } catch (error) {
      console.error("Error creating auction:", error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Välkommen till min auktionssidan!</h1>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <section>
            <h2>Vad vill du sälja?</h2>
            <label htmlFor="Title:">Användare:</label>
            <input
              type="text"
              name="user"
              value={formData.user}
              onChange={handeleChange}
              required
            />
            <label htmlFor="objekt">Objekt:</label>
            <input
              type="text"
              id="item"
              name="object"
              value={formData.object}
              onChange={handeleChange}
              required
            />
            <label htmlFor="image">Ladda upp en bild</label>
            <input type="file" accept="image/*" onChange={handleFileChange} />
            <img src={selectedImage?.name} alt={selectedImage?.name} />

            <label htmlFor="">Beskrivning</label>
            <textarea
              id="description"
              name="text"
              value={formData.text}
              onChange={handeleChange}
              required
            ></textarea>
          </section>
          <section>
            <h2>Annonsdetaljer</h2>

            <label htmlFor="price">Utropspris (kr):</label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handeleChange}
              required
            />
            <label htmlFor="duration">Långvarighet (dagar)</label>
            <select
              id="duration"
              name="duration"
              value={formData.duration}
              onChange={handeleChange}
              required
            >
              <option value={7}>7 dagar</option>
              <option value={14}>14 dagar</option>
            </select>
            <button type="submit">Skapa auktion</button>
          </section>
        </form>
      </main>
    </div>
  );
};

export default CreateAuction;
