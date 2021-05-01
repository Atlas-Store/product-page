/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

const ModdedSearchBar = styled.input`
  width: 80vw;
  height: 30px;
  border: 1px solid #999999;
`;

function SearchBar({ handleSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  function handleChange(event) {
    setSearchTerm(event.target.value);
    handleSearch(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleSearch(searchTerm);
  }

  return (
    <form onSubmit={handleSubmit}>
      <ModdedSearchBar
        placeholder="“Have a question? Search for answers…”
        "
        onChange={handleChange}
        value={searchTerm}
      />
      <input type="submit" value="submit" />
    </form>
  );
}

SearchBar.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default SearchBar;
