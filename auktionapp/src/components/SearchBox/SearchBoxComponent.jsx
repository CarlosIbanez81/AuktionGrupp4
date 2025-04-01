

const SearchBoxComponent = ({input, setInput, handleSearch}) => {

  return (
    <>
      <input type="text" placeholder="Sök auktion..." value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleSearch}>Sök</button>
    </>
  )
};

export default SearchBoxComponent;