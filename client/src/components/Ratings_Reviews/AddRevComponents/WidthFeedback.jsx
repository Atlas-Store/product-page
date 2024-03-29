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
  1: 'Too narrow',
  2: 'Slightly narrow',
  3: 'Perfect',
  4: 'Slighty wide',
  5: 'Too wide',
};

const WidthFeedback = ({
  widthFeedback, updateWidthF, characteristics, updateChars,
}) => (
  <div>
    <div>
      <h4>*WIDTH: </h4>
      <Info>{Feedback[widthFeedback]}</Info>
      <RadioPlugs>
        <input
          type="radio"
          name="width"
          value="1"
          required
          onClick={(event) => {
            updateWidthF(event.target.value); updateChars({
              ...characteristics,
              Width: {
                id: 15,
                value: event.target.value,
              },
            });
          }}
        />
      </RadioPlugs>
      <RadioPlugs>
        <input
          type="radio"
          name="width"
          value="2"
          required
          onClick={(event) => {
            updateWidthF(event.target.value); updateChars({
              ...characteristics,
              Width: {
                id: 15,
                value: event.target.value,
              },
            });
          }}
        />
      </RadioPlugs>
      <RadioPlugs>
        <input
          type="radio"
          name="width"
          value="3"
          required
          onClick={(event) => {
            updateWidthF(event.target.value); updateChars({
              ...characteristics,
              Width: {
                id: 15,
                value: event.target.value,
              },
            });
          }}
        />
      </RadioPlugs>
      <RadioPlugs>
        <input
          type="radio"
          name="width"
          value="4"
          required
          onClick={(event) => {
            updateWidthF(event.target.value); updateChars({
              ...characteristics,
              Width: {
                id: 15,
                value: event.target.value,
              },
            });
          }}
        />
      </RadioPlugs>
      <RadioPlugs>
        <input
          type="radio"
          name="width"
          value="5"
          required
          onClick={(event) => {
            updateWidthF(event.target.value); updateChars({
              ...characteristics,
              Width: {
                id: 15,
                value: event.target.value,
              },
            });
          }}
        />
      </RadioPlugs>
    </div>
    <DescDiv>
      <Description location="left">Too small</Description>
      <Description location="center">Perfect</Description>
      <Description location="right">Too big</Description>
    </DescDiv>
  </div>
);

export default WidthFeedback;
