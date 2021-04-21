import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const YesButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
  font-size: smaller;
`;
const NoButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
  font-size: smaller;
`;
const HelpfulSection = styled.section`
  padding-top: 20px;
  font-size: smaller;
`;
const Helpful = ({ countYes }) => {
  const [helpfulCount, updateHelpful] = useState(countYes);
  const [notHelpful, updateNotHelpful] = useState(0);
  const [voted, updateVoted] = useState(false);

  return (
    <HelpfulSection>
      Was this review helpful?
      <YesButton type="button" onClick={() => { if (!voted) { updateHelpful(helpfulCount + 1); updateVoted(true); } }}>
        {' '}
        <u> Yes </u>
      </YesButton>
      {`(${helpfulCount})`}
      <NoButton type="button" onClick={() => { if (!voted) { updateNotHelpful(notHelpful + 1); updateVoted(true); } }}>
        {' '}
        <u> No </u>
      </NoButton>
      {`(${notHelpful})`}
      {' | '}
      <u>
        {' '}
        {' Report '}
        {' '}
      </u>
    </HelpfulSection>
  );
};

Helpful.propTypes = {
  countYes: PropTypes.number.isRequired,
};
export default Helpful;
