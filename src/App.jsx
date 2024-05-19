import { useState } from 'react'
import { useFetch } from './useFetch';
import './App.css'
import SearchBar from './components/SearchBar'
import GithubContainer from './components/GithubContainer';

function App() {

  const [username, setUsername] =useState("");
 


  

  return (
    <>
      <h1>Know Your Github Status</h1>
      <SearchBar setUsername={setUsername} placeHolder="Enter Github Username..."/>
      <GithubContainer username={username}/>
    </>
  )
}

export default App
