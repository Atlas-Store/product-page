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
  2: 'Slightly Uncomfortable',
  3: 'Ok',
  4: 'Comfortable',
  5: 'Perfect!',
};

const ComfortFB = ({ comfortFeedback, updateComfortF }) => (
  <div>
    <form>
      <h4>*COMFORT: </h4>
      <Info>{Feedback[comfortFeedback]}</Info>
      <RadioPlugs>
        <input type="radio" name="size" value="1" onClick={(event) => updateComfortF(event.target.value)} />
      </RadioPlugs>
      <RadioPlugs>
        <input type="radio" name="size" value="2" onClick={(event) => updateComfortF(event.target.value)} />
      </RadioPlugs>
      <RadioPlugs>
        <input type="radio" name="size" value="3" onClick={(event) => updateComfortF(event.target.value)} />
      </RadioPlugs>
      <RadioPlugs>
        <input type="radio" name="size" value="4" onClick={(event) => updateComfortF(event.target.value)} />
      </RadioPlugs>
      <RadioPlugs>
        <input type="radio" name="size" value="5" onClick={(event) => updateComfortF(event.target.value)} />
      </RadioPlugs>
    </form>
    <DescDiv>
      <Description location="left">Uncomfortable</Description>
      <Description location="right">Comfortable</Description>
    </DescDiv>
  </div>
);

export default ComfortFB;
