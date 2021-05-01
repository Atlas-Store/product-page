/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const RadioPlugs = styled.span`
  padding: 12px;
`;

const SizeInfo = styled.div`
  font-size: smaller;
`;

const SizeDescDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  margin-bottom: 25px;
`;
const SizeDescription = styled.label`
  text-align: ${(props) => props.location};
  font-size: smaller;
`;
const sizeFB = {
  0: 'Please Select',
  1: 'A size too small',
  2: '1/2 size too small',
  3: 'Perfect',
  4: '1/2 size too big',
  5: 'A size too big',
};

const SizeFeedback = ({
  sizeFeedback, updateSizeF, characteristics, updateChars,
}) => (
  <div>
    <form>
      <h4>*SIZE: </h4>
      <SizeInfo>{sizeFB[sizeFeedback]}</SizeInfo>
      <RadioPlugs>
        <input
          type="radio"
          name="size"
          value="1"
          required
          onClick={(event) => {
            updateSizeF(event.target.value);
            updateChars({
              ...characteristics,
              Size: {
                id: 14,
                value: event.target.value,
              },
            });
          }}
        />
      </RadioPlugs>
      <RadioPlugs>
        <input
          type="radio"
          name="size"
          value="2"
          required
          onClick={(event) => {
            updateSizeF(event.target.value);
            updateChars({
              ...characteristics,
              Size: {
                id: 14,
                value: event.target.value,
              },
            });
          }}
        />
      </RadioPlugs>
      <RadioPlugs>
        <input
          type="radio"
          name="size"
          value="3"
          required
          onClick={(event) => {
            updateSizeF(event.target.value);
            updateChars({
              ...characteristics,
              Size: {
                id: 14,
                value: event.target.value,
              },
            });
          }}
        />
      </RadioPlugs>
      <RadioPlugs>
        <input
          type="radio"
          name="size"
          value="4"
          required
          onClick={(event) => {
            updateSizeF(event.target.value);
            updateChars({
              ...characteristics,
              Size: {
                id: 14,
                value: event.target.value,
              },
            });
          }}
        />
      </RadioPlugs>
      <RadioPlugs>
        <input
          type="radio"
          name="size"
          value="5"
          required
          onClick={(event) => {
            updateSizeF(event.target.value);
            updateChars({
              ...characteristics,
              Size: {
                id: 14,
                value: event.target.value,
              },
            });
          }}
        />
      </RadioPlugs>
    </form>
    <SizeDescDiv>
      <SizeDescription location="left">Too small</SizeDescription>
      <SizeDescription location="center">Perfect</SizeDescription>
      <SizeDescription location="right">Too big</SizeDescription>
    </SizeDescDiv>
  </div>
);

export default SizeFeedback;
