import React from "react";
import "./CreateAuction.css";
import { useState } from "react";

const CreateAuction = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Välkommen till min auktionssidan!</h1>
      </header>
      <main>
        <form action="">
          <section>
            <h2>Vad vill du sälja?</h2>

            <input type="text" id="item" name="item" required />
            <label htmlFor="image">Ladda upp en bild</label>
            <input type="file" accept="image/*" onChange={handleFileChange} />
            <img src={selectedImage?.name} alt={selectedImage?.name} />

            <label htmlFor="Title:">Rubrik</label>
            <input type="text" />

            <label htmlFor="">Beskrivning</label>
            <textarea id="description" name="description" required></textarea>
          </section>
          <section>
            <h2>Annonsdetaljer</h2>

            <label htmlFor="price">Utropspris</label>
            <input
              type="number"
              id="price"
              name="price"
              placeholder="kr"
              required
            />
            <label htmlFor="duration">Långvarighet (dagar)</label>
            <select id="duration" name="duration" required>
              <option value="7">7 dagar</option>
              <option value="14">14 dagar</option>
            </select>
            <button type="submit">Skapa auktion</button>
          </section>
        </form>
      </main>
    </div>
  );
};

export default CreateAuction;
