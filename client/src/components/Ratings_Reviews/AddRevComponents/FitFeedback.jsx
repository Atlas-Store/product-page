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
  0: 'Please select',
  1: 'Runs tight',
  2: 'Runs slightly tight',
  3: 'Perfect',
  4: 'Runs slightly loose',
  5: 'Runs loose',
};

const FitFeedback = ({
  fitFeedback, updateFitF, characteristics, updateChars,
}) => (
  <div>
    <form>
      <h4>*FIT: </h4>
      <Info>{Feedback[fitFeedback]}</Info>
      <RadioPlugs>
        <input
          type="radio"
          name="fit"
          value="1"
          required
          onClick={(event) => {
            updateFitF(event.target.value); updateChars({
              ...characteristics,
              Fit: {
                id: 19,
                value: event.target.value,
              },
            });
          }}
        />
      </RadioPlugs>
      <RadioPlugs>
        <input
          type="radio"
          name="fit"
          value="2"
          required
          onClick={(event) => {
            updateFitF(event.target.value); updateChars({
              ...characteristics,
              Fit: {
                id: 19,
                value: event.target.value,
              },
            });
          }}
        />
      </RadioPlugs>
      <RadioPlugs>
        <input
          type="radio"
          name="fit"
          value="3"
          required
          onClick={(event) => {
            updateFitF(event.target.value); updateChars({
              ...characteristics,
              Fit: {
                id: 19,
                value: event.target.value,
              },
            });
          }}
        />
      </RadioPlugs>
      <RadioPlugs>
        <input
          type="radio"
          name="fit"
          value="4"
          required
          onClick={(event) => {
            updateFitF(event.target.value); updateChars({
              ...characteristics,
              Fit: {
                id: 19,
                value: event.target.value,
              },
            });
          }}
        />
      </RadioPlugs>
      <RadioPlugs>
        <input
          type="radio"
          name="fit"
          value="5"
          required
          onClick={(event) => {
            updateFitF(event.target.value); updateChars({
              ...characteristics,
              Fit: {
                id: 19,
                value: event.target.value,
              },
            });
          }}
        />
      </RadioPlugs>
    </form>
    <DescDiv>
      <Description location="left">Too small</Description>
      <Description location="center">Perfect</Description>
      <Description location="right">Too big</Description>
    </DescDiv>
  </div>
);

export default FitFeedback;
