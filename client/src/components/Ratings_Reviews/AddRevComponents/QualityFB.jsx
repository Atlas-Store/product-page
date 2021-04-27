/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const RadioPlugs = styled.span`
  padding: 12px;
`;

const Info = styled.div`
  font-size: smaller;
`;

const DescDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  margin-bottom: 25px;
`;
const Description = styled.label`
  text-align: ${(props) => props.location};
  font-size: smaller;
`;
const Feedback = {
  0: 'Please Select',
  1: 'Poor',
  2: 'Below average',
  3: 'What I expected',
  4: 'Pretty Great',
  5: 'Perfect!',
};

const QualityFB = ({
  qualityFeedback, updateQualityF, characteristics, updateChars,
}) => (
  <div>
    <form>
      <h4>*QUALITY: </h4>
      <Info>{Feedback[qualityFeedback]}</Info>
      <RadioPlugs>
        <input
          type="radio"
          name="quality"
          value="1"
          required
          onClick={(event) => {
            updateQualityF(event.target.value);
            updateChars({
              ...characteristics,
              Quality: {
                id: 16,
                value: event.target.value,
              },
            });
          }}
        />
      </RadioPlugs>
      <RadioPlugs>
        <input
          type="radio"
          name="quality"
          value="2"
          required
          onClick={(event) => {
            updateQualityF(event.target.value);
            updateChars({
              ...characteristics,
              Quality: {
                id: 16,
                value: event.target.value,
              },
            });
          }}
        />
      </RadioPlugs>
      <RadioPlugs>
        <input
          type="radio"
          name="quality"
          value="3"
          required
          onClick={(event) => {
            updateQualityF(event.target.value);
            updateChars({
              ...characteristics,
              Quality: {
                id: 16,
                value: event.target.value,
              },
            });
          }}
        />
      </RadioPlugs>
      <RadioPlugs>
        <input
          type="radio"
          name="quality"
          value="4"
          required
          onClick={(event) => {
            updateQualityF(event.target.value);
            updateChars({
              ...characteristics,
              Quality: {
                id: 16,
                value: event.target.value,
              },
            });
          }}
        />
      </RadioPlugs>
      <RadioPlugs>
        <input
          type="radio"
          name="quality"
          value="5"
          required
          onClick={(event) => {
            updateQualityF(event.target.value);
            updateChars({
              ...characteristics,
              Quality: {
                id: 16,
                value: event.target.value,
              },
            });
          }}
        />
      </RadioPlugs>
    </form>
    <DescDiv>
      <Description location="left">Poor</Description>
      <Description location="right">Perfect</Description>
    </DescDiv>
  </div>
);

export default QualityFB;
