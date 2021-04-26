/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const renderFunc = require('./renderFunc.js');

const Bar = styled.div`
  display: flex;
  width: 192px;
  height: 5px;
  background-image: linear-gradient(to right, green ${(props) => props.percent}%, lightgray ${(props) => 1 - props.percent}%);
`;
const StarBars = styled.div`
  display: flex;
  align-items: baseline;
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
const BarRatings = ({ reviews }) => {
  const freqOfRatings = renderFunc.frequency(reviews);
  return (
    <BarSection>
      <StarBars>
        <Category>
          <u> 5 Stars </u>
        </Category>
        <Bar percent={(freqOfRatings['5'] / reviews.length) * 100} />
      </StarBars>
      <div>
        <StarBars>
          <Category>
            <u> 4 Stars </u>
          </Category>
          <Bar percent={(freqOfRatings['4'] / reviews.length) * 100} />
        </StarBars>
      </div>
      <div>
        <StarBars>
          <Category>
            <u> 3 Stars </u>
          </Category>
          <Bar percent={(freqOfRatings['3'] / reviews.length) * 100} />
        </StarBars>
      </div>
      <div>
        <StarBars>
          <Category>
            <u> 2 Stars </u>
          </Category>
          <Bar percent={(freqOfRatings['2'] / reviews.length) * 100} />
        </StarBars>
      </div>
      <div>
        <StarBars>
          <Category>
            <u> 1 Stars </u>
          </Category>
          <Bar percent={(freqOfRatings['1'] / reviews.length) * 100} />
        </StarBars>
      </div>
    </BarSection>

  );
};

export default BarRatings;
