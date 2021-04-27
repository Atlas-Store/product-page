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
  1: 'Too Narrow',
  2: 'Slightly Narrow',
  3: 'Perfect',
  4: 'Slighty Wide',
  5: 'Too Wide',
};

const WidthFB = ({ widthFeedback, updateWidthF }) => (
  <div>
    <form>
      <h4>*WIDTH: </h4>
      <Info>{Feedback[widthFeedback]}</Info>
      <RadioPlugs>
        <input type="radio" name="size" value="1" onClick={(event) => updateWidthF(event.target.value)} />
      </RadioPlugs>
      <RadioPlugs>
        <input type="radio" name="size" value="2" onClick={(event) => updateWidthF(event.target.value)} />
      </RadioPlugs>
      <RadioPlugs>
        <input type="radio" name="size" value="3" onClick={(event) => updateWidthF(event.target.value)} />
      </RadioPlugs>
      <RadioPlugs>
        <input type="radio" name="size" value="4" onClick={(event) => updateWidthF(event.target.value)} />
      </RadioPlugs>
      <RadioPlugs>
        <input type="radio" name="size" value="5" onClick={(event) => updateWidthF(event.target.value)} />
      </RadioPlugs>
    </form>
    <DescDiv>
      <Description location="left">Too small</Description>
      <Description location="center">Perfect</Description>
      <Description location="right">Too big</Description>
    </DescDiv>
  </div>
);

export default WidthFB;
