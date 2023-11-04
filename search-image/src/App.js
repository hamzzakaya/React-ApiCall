import searchImages from "./Api";
import { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';
import SearchHeader from './SearchHeader';

function App() {

  
  const handleSubmit = (term) => {

    searchImages(term)
    console.log(term)

  }

  return (
    <div className="App">

      <SearchHeader search={handleSubmit} />

    </div>
  );
}

export default App;
