/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const renderFunc = require('./renderFunc.js');

const Bar = styled.div`
  display: flex;
  width: 192px;
  height: 5px;
  background-image: linear-gradient(to right, #2ada71 ${(props) => props.percent}%, lightgray ${(props) => 1 - props.percent}%);
`;
const StarBars = styled.div`
  display: flex;
  align-items: baseline;
  border: 2.5px solid white;
  &:hover {
    border: 2.5px solid black;
    cursor: pointer;
  }
`;

const Category = styled.span`
  padding-right: 10px;
`;

const BarSection = styled.section`
  padding-top: 30px;
  border-bottom: 2.5px solid black;
  padding-bottom: 30px;
`;

// eslint-disable-next-line react/prop-types
const BarRatings = ({ starStats, updateFilterClick, updateByStars }) => {
  const freqOfRatings = renderFunc.frequency(starStats);
  return (
    <BarSection>
      <StarBars onClick={() => { updateFilterClick(true); updateByStars(5); }}>
        <Category>
          <u> 5 Stars </u>
        </Category>
        <Bar percent={(freqOfRatings['5'] / freqOfRatings.divisor) * 100} />
      </StarBars>
      <div>
        <StarBars onClick={() => { updateFilterClick(true); updateByStars(4); }}>
          <Category>
            <u> 4 Stars </u>
          </Category>
          <Bar percent={(freqOfRatings['4'] / freqOfRatings.divisor) * 100} />
        </StarBars>
      </div>
      <div>
        <StarBars onClick={() => { updateFilterClick(true); updateByStars(3); }}>
          <Category>
            <u> 3 Stars </u>
          </Category>
          <Bar percent={(freqOfRatings['3'] / freqOfRatings.divisor) * 100} />
        </StarBars>
      </div>
      <div>
        <StarBars onClick={() => { updateFilterClick(true); updateByStars(2); }}>
          <Category>
            <u> 2 Stars </u>
          </Category>
          <Bar percent={(freqOfRatings['2'] / freqOfRatings.divisor) * 100} />
        </StarBars>
      </div>
      <div>
        <StarBars onClick={() => { updateFilterClick(true); updateByStars(1); }}>
          <Category>
            <u> 1 Stars </u>
          </Category>
          <Bar percent={(freqOfRatings['1'] / freqOfRatings.divisor) * 100} />
        </StarBars>
      </div>
    </BarSection>

  );
};

export default BarRatings;
