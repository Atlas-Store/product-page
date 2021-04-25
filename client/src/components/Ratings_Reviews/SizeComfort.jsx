import React from 'react';
import styled from 'styled-components';

const ComparisonSection = styled.section`
  padding-top: 30px;
`;

const CompBar = styled.div`
  display: flex;
  margin-top: 10px;
  background-image: linear-gradient(to right, lightgray 100%, black 0%);
  height 4px;
`;

const ClassBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  margin-bottom: 25px;
`;
const Classification = styled.label`
  text-align: ${(props) => props.location};
  font-size: smaller;
`;

const Tick = styled.div`
  text-align: ${(props) => props.location};
  font-size: smaller;
  z-index: 10;
`;

const AvgRating = styled.div`
  position: absolute:
  top: 0;
  left: 0;
`;

const SizeComfort = ({ reviews }) => (
  <ComparisonSection>
    <div>
      <div>
        <strong> Size </strong>
      </div>
      <AvgRating>
        <CompBar />
        <Tick location="center">▼</Tick>
      </AvgRating>
      <ClassBar>
        <Classification location="left">
          Too Small
        </Classification>
        <Classification location="center">
          Perfect
        </Classification>
        <Classification location="right">
          Too Large
        </Classification>
      </ClassBar>
    </div>
    <div>
      <div>
        <strong> Width </strong>
      </div>
      <AvgRating>
        <CompBar />
        <Tick location="center">▼</Tick>
      </AvgRating>
      <ClassBar>
        <Classification location="left">
          Too Narrow
        </Classification>
        <Classification location="center">
          Perfect
        </Classification>
        <Classification location="right">
          Too Wide
        </Classification>
      </ClassBar>
    </div>

  </ComparisonSection>
);

export default SizeComfort;
