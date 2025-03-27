import { useState } from "react";

const SearchBoxComponent = () => {

  const {input, setInput} = useState();

  const handleSearch = (e) => {
    e.preventDefault();
    
    if(!input) return;


  };

  return (
    <>
      <SearchBoxComponent input={input} setInput={setInput} handleSearch={handleSearch} />
    </>
  )
};

export default SearchBoxComponent;