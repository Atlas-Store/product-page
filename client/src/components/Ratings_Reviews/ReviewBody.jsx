import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// padding-left: 10px;
// padding-right: 10px;
// padding-top: 20px;
// padding-bottom: 20px;
// margin: 10px;
const MoreText = styled.button`
  background-color: transparent;
  border: 1.5px solid black;
  cursor: pointer;
`;
const ReviewBody = ({ body }) => {
  const [showButton, updateButton] = useState('Show More');
  const [reviewLength, updateLength] = useState(250);
  return (
    <div>
      {(body.length > 250 && reviewLength === 250)
      && (
      <div>
        <p>
          {`${body.substring(0, reviewLength)}...`}
        </p>
        <MoreText type="button" onClick={() => { updateLength(body.length); updateButton('Show Less'); }}>
          { showButton }
        </MoreText>
      </div>
      )}
      {(body.length > 250 && reviewLength > 250)
      && (
      <div>
        <p>{body.substring(0, reviewLength)}</p>
        <MoreText type="button" onClick={() => { updateLength(250); updateButton('Show More'); }}>
          { showButton }
        </MoreText>
      </div>
      )}
      {body.length <= 250
        && <p>{body}</p>}
    </div>

  );
};
ReviewBody.propTypes = {
  body: PropTypes.string.isRequired,
};
export default ReviewBody;
