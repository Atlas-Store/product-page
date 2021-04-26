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
  console.log('in StyleSelector, props.handleClickStyle is', props.handleClickStyle);
  return (
    <Grid>
      {/* {for (let i = 0; i < props.stylesURLs.length; i++) {

      }} */}
      <Row>
        <Col>
          <Style styleURL={props.stylesURLs[0]} index={0} setCurrentImageURL={props.setCurrentImageURL} setCurrentGroupOfImageURLs={props.setCurrentGroupOfImageURLs} dataFirstProduct={props.dataFirstProduct} resetSliderToFirstImage={props.resetSliderToFirstImage} handleClickStyle={props.handleClickStyle}/>
        </Col>

        <Col>
          <Style styleURL={props.stylesURLs[1]} index={1} setCurrentImageURL={props.setCurrentImageURL}  setCurrentGroupOfImageURLs={props.setCurrentGroupOfImageURLs} dataFirstProduct={props.dataFirstProduct} handleClickStyle={props.handleClickStyle} />
        </Col>

        <Col>
          <Style styleURL={props.stylesURLs[2]} index={2} setCurrentImageURL={props.setCurrentImageURL} setCurrentGroupOfImageURLs={props.setCurrentGroupOfImageURLs} dataFirstProduct={props.dataFirstProduct} handleClickStyle={props.handleClickStyle} />
        </Col>

        <Col>
          <Style styleURL={props.stylesURLs[3]} index={3} setCurrentImageURL={props.setCurrentImageURL} setCurrentGroupOfImageURLs={props.setCurrentGroupOfImageURLs} dataFirstProduct={props.dataFirstProduct} handleClickStyle={props.handleClickStyle}/>
        </Col>

      </Row>

      <Row>
        <Col>
          <Style styleURL={props.stylesURLs[4]} index={4} setCurrentImageURL={props.setCurrentImageURL} setCurrentGroupOfImageURLs={props.setCurrentGroupOfImageURLs} dataFirstProduct={props.dataFirstProduct} handleClickStyle={props.handleClickStyle}/>
        </Col>

        <Col>
          <Style styleURL={props.stylesURLs[5]} index={5} setCurrentImageURL={props.setCurrentImageURL} setCurrentGroupOfImageURLs={props.setCurrentGroupOfImageURLs} dataFirstProduct={props.dataFirstProduct} handleClickStyle={props.handleClickStyle}/>
        </Col>

        <Col>
          <Style styleURL={props.stylesURLs[6]} index={6} setCurrentImageURL={props.setCurrentImageURL} setCurrentGroupOfImageURLs={props.setCurrentGroupOfImageURLs} dataFirstProduct={props.dataFirstProduct} handleClickStyle={props.handleClickStyle}/>
        </Col>

        <Col>
          <Style styleURL={props.stylesURLs[7]} index={7} setCurrentImageURL={props.setCurrentImageURL} setCurrentGroupOfImageURLs={props.setCurrentGroupOfImageURLs} dataFirstProduct={props.dataFirstProduct} handleClickStyle={props.handleClickStyle}/>
        </Col>

      </Row>
    </Grid>

  )
}

export default StyleSelector;