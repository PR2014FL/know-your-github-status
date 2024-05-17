import { useState } from 'react'
import { useFetch } from './useFetch';
import './App.css'
import SearchBar from './components/SearchBar'
import GithubContainer from './components/GithubContainer';

function App() {

  const [github, setGithub] =useState(null);//hold the github json info here
 


  const getGitByName = (searchTerm) => {

  }

  return (
    <>
      <h1>Find Your Friends on Github!</h1>
      <SearchBar searchVal={getGitByName} placeHolder="Enter Full Name..."/>
      <GithubContainer login="pr204fl"/>
    </>
  )
}

export default App
