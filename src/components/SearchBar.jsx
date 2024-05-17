import React, {useState, useEffect} from 'react'

function SearchBar({searchVal, placeHolder}) {

  const [inputText, setInputText] = useState({
    searchTerm: "",
  });
  
  const handleChange = (event) => {
    setInputText({...inputText, [event.target.name]: [event.target.value] });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    searchVal(inputText.searchTerm);
  }
  return (
    <>
    <form onSubmit={handleSubmit}>
        <input type="text" name="searchTerm" onChange={handleChange} value={inputText.searchTerm} placeholder={placeHolder}/>
        <input type="submit" value="submit" />
    </form>
    </>
  )
}

export default SearchBar