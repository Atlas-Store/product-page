import React from 'react';
import styled from 'styled-components';

const StyledSorter = styled.select`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: .85em;
  margin-top: 1em;
  margin-bottom: 1em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
`;
const SortBy = () => (
  <StyledSorter>
    <option value="Helpful"> Helpful </option>
    <option value="Newest">  Newest  </option>
    <option value="Relevant">  Relevant  </option>
  </StyledSorter>
);

export default SortBy;
