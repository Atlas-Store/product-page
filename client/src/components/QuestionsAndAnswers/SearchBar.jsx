/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import styled from 'styled-components';

const ModdedSearchBar = styled.input`
  width: 900px;
  height: 30px;
  border: 1px solid #999999;
`;

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  function handleChange(event) {
    setSearchTerm(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log('hello', event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <ModdedSearchBar
        placeholder="ask me anything"
        onChange={handleChange}
      />
      <input type="submit" value="submit" />
    </form>
  );
}

export default SearchBar;
