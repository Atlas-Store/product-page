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
  1: 'Runs short',
  2: 'Runs slightly short',
  3: 'Perfect',
  4: 'Runs slightly long',
  5: 'Runs long',
};

const LengthFeedback = ({
  lengthFeedback, updateLengthF, characteristics, updateChars,
}) => (
  <div>
    <form>
      <h4>*LENGTH: </h4>
      <Info>{Feedback[lengthFeedback]}</Info>
      <RadioPlugs>
        <input
          type="radio"
          name="length"
          value="1"
          required
          onClick={(event) => {
            updateLengthF(event.target.value); updateChars({
              ...characteristics,
              Length: {
                id: 18,
                value: event.target.value,
              },
            });
          }}
        />
      </RadioPlugs>
      <RadioPlugs>
        <input
          type="radio"
          name="length"
          value="2"
          required
          onClick={(event) => {
            updateLengthF(event.target.value); updateChars({
              ...characteristics,
              Length: {
                id: 18,
                value: event.target.value,
              },
            });
          }}
        />
      </RadioPlugs>
      <RadioPlugs>
        <input
          type="radio"
          name="length"
          value="3"
          required
          onClick={(event) => {
            updateLengthF(event.target.value); updateChars({
              ...characteristics,
              Length: {
                id: 18,
                value: event.target.value,
              },
            });
          }}
        />
      </RadioPlugs>
      <RadioPlugs>
        <input
          type="radio"
          name="length"
          value="4"
          required
          onClick={(event) => {
            updateLengthF(event.target.value); updateChars({
              ...characteristics,
              Length: {
                id: 18,
                value: event.target.value,
              },
            });
          }}
        />
      </RadioPlugs>
      <RadioPlugs>
        <input
          type="radio"
          name="length"
          value="5"
          required
          onClick={(event) => {
            updateLengthF(event.target.value); updateChars({
              ...characteristics,
              Length: {
                id: 18,
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

export default LengthFeedback;
