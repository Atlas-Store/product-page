import styled from 'styled-components';

export const Container = styled.div`
border: 2px solid palevioletred;
margin: 1em;
padding: 0.25em 1em;
`;

export const Row = styled.div`
  display:flex;
`;

export const Col = styled.div`
  flex: ${(props) => props.size};
`;
