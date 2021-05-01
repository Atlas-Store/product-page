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
  1: 'Uncomfortable',
  2: 'Slightly uncomfortable',
  3: 'Ok',
  4: 'Comfortable',
  5: 'Perfect!',
};

const ComfortFB = ({
  comfortFeedback, updateComfortF, characteristics, updateChars,
}) => (
  <div>
    <form>
      <h4>*COMFORT: </h4>
      <Info>{Feedback[comfortFeedback]}</Info>
      <RadioPlugs>
        <input
          type="radio"
          name="comfort"
          value="1"
          required
          onClick={(event) => {
            updateComfortF(event.target.value); updateChars({
              ...characteristics,
              Comfort: {
                id: 17,
                value: event.target.value,
              },
            });
          }}
        />
      </RadioPlugs>
      <RadioPlugs>
        <input
          type="radio"
          name="comfort"
          value="2"
          required
          onClick={(event) => {
            updateComfortF(event.target.value); updateChars({
              ...characteristics,
              Comfort: {
                id: 17,
                value: event.target.value,
              },
            });
          }}
        />
      </RadioPlugs>
      <RadioPlugs>
        <input
          type="radio"
          name="comfort"
          value="3"
          required
          onClick={(event) => {
            updateComfortF(event.target.value); updateChars({
              ...characteristics,
              Comfort: {
                id: 17,
                value: event.target.value,
              },
            });
          }}
        />
      </RadioPlugs>
      <RadioPlugs>
        <input
          type="radio"
          name="comfort"
          value="4"
          required
          onClick={(event) => {
            updateComfortF(event.target.value); updateChars({
              ...characteristics,
              Comfort: {
                id: 17,
                value: event.target.value,
              },
            });
          }}
        />
      </RadioPlugs>
      <RadioPlugs>
        <input
          type="radio"
          name="comfort"
          value="5"
          required
          onClick={(event) => {
            updateComfortF(event.target.value); updateChars({
              ...characteristics,
              Comfort: {
                id: 17,
                value: event.target.value,
              },
            });
          }}
        />
      </RadioPlugs>
    </form>
    <DescDiv>
      <Description location="left">Uncomfortable</Description>
      <Description location="right">Comfortable</Description>
    </DescDiv>
  </div>
);

export default ComfortFB;
