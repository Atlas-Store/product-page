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
  margin-top: 7.5px;
  text-align: ${(props) => props.location};
  font-size: smaller;
`;

const Tick = styled.div`
  position absolute;
  left: ${(props) => props.position}%;
  font-size: smaller;
  z-index: 1000;
`;

const AvgRating = styled.div`
  position: absolute:
  top: 0;
  left: 0;
`;

const SizeComfort = ({ ratings }) => (
  <ComparisonSection>
    {ratings.characteristics.Size && (
    <div>
      <div>
        <strong> Size </strong>
      </div>
      <AvgRating>
        <CompBar />
        <Tick position={(ratings.characteristics.Size.value * 5)}>▼</Tick>
      </AvgRating>
      <ClassBar>
        <Classification location="left">
          Too Small
        </Classification>
        <Classification location="right">
          Too Large
        </Classification>
      </ClassBar>
    </div>
    ) }
    {ratings.characteristics.Width && (
    <div>
      <div>
        <strong> Width </strong>
      </div>
      <AvgRating>
        <CompBar />
        <Tick position={(ratings.characteristics.Width.value * 5)}>▼</Tick>
      </AvgRating>
      <ClassBar>
        <Classification location="left">
          Too Narrow
        </Classification>
        <Classification location="right">
          Too Wide
        </Classification>
      </ClassBar>
    </div>
    ) }
    {ratings.characteristics.Comfort && (
    <div>
      <div>
        <strong> Comfort </strong>
      </div>
      <AvgRating>
        <CompBar />
        <Tick position={(ratings.characteristics.Comfort.value * 5)}>▼</Tick>
      </AvgRating>
      <ClassBar>
        <Classification location="left">
          Uncomfortable
        </Classification>
        <Classification location="right">
          Perfect
        </Classification>
      </ClassBar>
    </div>
    ) }
    {ratings.characteristics.Quality && (
    <div>
      <div>
        <strong> Quality </strong>
      </div>
      <AvgRating>
        <CompBar />
        <Tick position={(ratings.characteristics.Quality.value * 5)}>▼</Tick>
      </AvgRating>
      <ClassBar>
        <Classification location="left">
          Poor
        </Classification>
        <Classification location="right">
          Perfect
        </Classification>
      </ClassBar>
    </div>
    ) }

  </ComparisonSection>
);

export default SizeComfort;
