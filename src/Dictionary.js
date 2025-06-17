import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function search(event) {
    event.preventDefault();
    let apiKey = "748d5734be19te1af0e3a12aa9abaofd";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function handleResponse(response) {
    console.log(response.data);
    setResults(response.data);
  }

  return (
    <div className="Dictionary">
      <h2>Search for a word in React Dictionary</h2>
      <form onSubmit={search} className="Dictionary-form">
        <input
          type="search"
          onChange={handleKeywordChange}
          className="Dictionary-search"
        />
      </form>
      <Results results={results} />
    </div>
  );
}
