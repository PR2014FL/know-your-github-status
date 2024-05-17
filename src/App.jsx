import { useState } from 'react'
import { useFetch } from './useFetch';
import './App.css'
import SearchBar from './components/SearchBar'
import GithubContainer from './components/GithubContainer';

function App() {

  const [username, setUsername] =useState("");//hold the github json info here
 


  const getGitByUsername = (searchTerm) => {

  }

  return (
    <>
      <h1>Know Your Github Status!</h1>
      <SearchBar searchVal={getGitByUsername} placeHolder="Enter Github Username..."/>
      <GithubContainer login="pr2014fl"/>
    </>
  )
}

export default App
