import React from 'react';
import styled, {css} from 'styled-components';
import Style from './Style.jsx';
import {Grid, Row, Col} from './Overview.jsx';

const StyleSelector = (props) => {

  // var abc = (
  //   <Grid>
  //     <Row>
  //     {for (let i = 0; i < props.stylesURLs.length; i += 4) {
  //      props.stylesURLs.slice(i, i + 4).map(item =>
  //     <Col>
  //         <Style styleURL={props.stylesURLs[0]} setCurrentImageURL={setCurrentImageURL}/>
  //     </Col>)
  //     }}
  //     </Row>
  //   </Grid>
  // )

  return (
    <Grid>
      <Row>
        <Col>
          <Style styleURL={props.stylesURLs[0]} setCurrentImageURL={props.setCurrentImageURL} />
        </Col>

        <Col>
          <Style styleURL={props.stylesURLs[1]} setCurrentImageURL={props.setCurrentImageURL}/>
        </Col>

        <Col>
          <Style styleURL={props.stylesURLs[2]} setCurrentImageURL={props.setCurrentImageURL}/>
        </Col>

        <Col>
          <Style styleURL={props.stylesURLs[3]} setCurrentImageURL={props.setCurrentImageURL}/>
        </Col>

      </Row>

      <Row>
        <Col>
          <Style styleURL={props.stylesURLs[4]} setCurrentImageURL={props.setCurrentImageURL}/>
        </Col>

        <Col>
          <Style styleURL={props.stylesURLs[5]} setCurrentImageURL={props.setCurrentImageURL}/>
        </Col>

        <Col>
          <Style styleURL={props.stylesURLs[6]} setCurrentImageURL={props.setCurrentImageURL}/>
        </Col>

        <Col>
          <Style styleURL={props.stylesURLs[7]} setCurrentImageURL={props.setCurrentImageURL}/>
        </Col>

      </Row>
    </Grid>

  )
}

export default StyleSelector;