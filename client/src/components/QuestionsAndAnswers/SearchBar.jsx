/* eslint-disable jsx-a11y/label-has-associated-control */
import React, {useState, useEffect} from 'react';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <form action="/" method="get">
      <label htmlFor="header-search">
        <span className="visually-hidden">Search for the Answers</span>
      </label>
      <input
        type="text"
        id="header-search"
        placeholder="Show me the money"
        name="s"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
