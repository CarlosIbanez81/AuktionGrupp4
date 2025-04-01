import { useState } from "react";
import SearchBoxComponent from "../../components/SearchBox/SearchBoxComponent";

const SearchBoxContainer = () => {

  const {input, setInput} = useState();

  const handleSearch = (e) => {
    e.preventDefault();
    
    if(!input) return;
    
    try {
      const response = await fetch(`http://localhost:5000/api/auctions/search?input=${input}`);
      const data = await response.json();
      console.log("Resultat:", data)
    } catch (error) {
      console.error("Gick ej att hämta data.", error)
    }
  };

  return (
    <>
      <SearchBoxComponent input={input} setInput={setInput} handleSearch={handleSearch} />
    </>
  )
};

export default SearchBoxContainer;