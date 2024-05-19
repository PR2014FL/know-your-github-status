import {useState} from 'react'

function SearchBar({setUsername, placeHolder}) {

  const [inputText, setInputText] = useState({
    searchTerm: "",
  });
  
  const handleChange = (event) => {
    setInputText({...inputText, [event.target.name]: event.target.value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setUsername(inputText.searchTerm);
  }
  return (
    <>
    <form className="searchBarDiv" onSubmit={handleSubmit}>
        <input className="textbox"type="text" name="searchTerm" onChange={handleChange} value={inputText.searchTerm} placeholder={placeHolder}/>
        <input className="button" type="submit" value="submit" />
    </form>
    </>
  )
}

export default SearchBar