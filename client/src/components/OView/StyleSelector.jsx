import React from 'react';
import styled, {css} from 'styled-components';
import Style from './Style.jsx';
import {Grid, Row, Col} from './Overview.jsx';

const StyleSelector = (props) => {

  let arrOfNumsStyle = Array.from({length: props.stylesURLs.length}, (_, index) => index);
  let nestedArrOfNumsStyles = [];
  for (let i = 0; i < arrOfNumsStyle.length; i += 4) {
    nestedArrOfNumsStyles.push([arrOfNumsStyle[i], arrOfNumsStyle[i+1], arrOfNumsStyle[i+2], arrOfNumsStyle[i+3]]);
  }

  return (
    <Grid>
      {/* {for (let i = 0; i < props.stylesURLs.length; i++) {

      }} */}
    {nestedArrOfNumsStyles.map((item, i) => (
       <Row key={i}>
          <Col>
          {props.stylesURLs[item[0]] ? <Style setCurrentStyleIndex={props.setCurrentStyleIndex} styleURL={props.stylesURLs[(nestedArrOfNumsStyles.indexOf(item))*4]} index={(nestedArrOfNumsStyles.indexOf(item))*4} setCurrentImageURL={props.setCurrentImageURL} setCurrentGroupOfImageURLs={props.setCurrentGroupOfImageURLs} styles={props.styles} handleClickStyle={props.handleClickStyle} specifySlideToContinueFrom={props.specifySlideToContinueFrom}/> : undefined}
          </Col>

          <Col>
          {props.stylesURLs[item[1]] ? <Style setCurrentStyleIndex={props.setCurrentStyleIndex} styleURL={props.stylesURLs[(nestedArrOfNumsStyles.indexOf(item))*4 + 1]} index={(nestedArrOfNumsStyles.indexOf(item))*4+1} setCurrentImageURL={props.setCurrentImageURL} setCurrentGroupOfImageURLs={props.setCurrentGroupOfImageURLs} styles={props.styles} handleClickStyle={props.handleClickStyle} specifySlideToContinueFrom={props.specifySlideToContinueFrom}/> : undefined}
          </Col>

          <Col>
          {props.stylesURLs[item[2]] ? <Style setCurrentStyleIndex={props.setCurrentStyleIndex} styleURL={props.stylesURLs[(nestedArrOfNumsStyles.indexOf(item))*4+2]} index={(nestedArrOfNumsStyles.indexOf(item))*4+2} setCurrentImageURL={props.setCurrentImageURL} setCurrentGroupOfImageURLs={props.setCurrentGroupOfImageURLs} styles={props.styles} handleClickStyle={props.handleClickStyle} specifySlideToContinueFrom={props.specifySlideToContinueFrom} /> : undefined}
          </Col>

          <Col>
          {props.stylesURLs[item[3]] ? <Style setCurrentStyleIndex={props.setCurrentStyleIndex} styleURL={props.stylesURLs[(nestedArrOfNumsStyles.indexOf(item))*4+3]} index={(nestedArrOfNumsStyles.indexOf(item))*4+3} setCurrentImageURL={props.setCurrentImageURL} setCurrentGroupOfImageURLs={props.setCurrentGroupOfImageURLs} styles={props.styles} handleClickStyle={props.handleClickStyle} specifySlideToContinueFrom={props.specifySlideToContinueFrom} key={item.id} /> : undefined}
          </Col>

          </Row>
    ))}
      {/* <Row>
        <Col>
        {props.stylesURLs[0] ? <Style styleURL={props.stylesURLs[0]} index={0} setCurrentImageURL={props.setCurrentImageURL} setCurrentGroupOfImageURLs={props.setCurrentGroupOfImageURLs} dataFirstProduct={props.dataFirstProduct} resetSliderToFirstImage={props.resetSliderToFirstImage} handleClickStyle={props.handleClickStyle} specifySlideToContinueFrom={props.specifySlideToContinueFrom} /> : undefined}
        </Col>

        <Col>
        {props.stylesURLs[1] ? <Style styleURL={props.stylesURLs[1]} index={1} setCurrentImageURL={props.setCurrentImageURL}  setCurrentGroupOfImageURLs={props.setCurrentGroupOfImageURLs} dataFirstProduct={props.dataFirstProduct} handleClickStyle={props.handleClickStyle} specifySlideToContinueFrom={props.specifySlideToContinueFrom}/> : undefined}
        </Col>

        <Col>
        {props.stylesURLs[2] ? <Style styleURL={props.stylesURLs[2]} index={2} setCurrentImageURL={props.setCurrentImageURL} setCurrentGroupOfImageURLs={props.setCurrentGroupOfImageURLs} dataFirstProduct={props.dataFirstProduct} handleClickStyle={props.handleClickStyle} specifySlideToContinueFrom={props.specifySlideToContinueFrom}/> : undefined}
        </Col>

        <Col>
        {props.stylesURLs[3] ? <Style styleURL={props.stylesURLs[3]} index={3} setCurrentImageURL={props.setCurrentImageURL} setCurrentGroupOfImageURLs={props.setCurrentGroupOfImageURLs} dataFirstProduct={props.dataFirstProduct} handleClickStyle={props.handleClickStyle} specifySlideToContinueFrom={props.specifySlideToContinueFrom}/> : undefined}
        </Col>

      </Row>

      <Row>
        <Col>
          {props.stylesURLs[4] ? <Style styleURL={props.stylesURLs[4]} index={4} setCurrentImageURL={props.setCurrentImageURL} setCurrentGroupOfImageURLs={props.setCurrentGroupOfImageURLs} dataFirstProduct={props.dataFirstProduct} handleClickStyle={props.handleClickStyle} specifySlideToContinueFrom={props.specifySlideToContinueFrom}/> : undefined}
        </Col>

        <Col>
        {props.stylesURLs[5] ? <Style styleURL={props.stylesURLs[5]} index={5} setCurrentImageURL={props.setCurrentImageURL} setCurrentGroupOfImageURLs={props.setCurrentGroupOfImageURLs} dataFirstProduct={props.dataFirstProduct} handleClickStyle={props.handleClickStyle} specifySlideToContinueFrom={props.specifySlideToContinueFrom}/> : undefined}
        </Col>

        <Col>
        {props.stylesURLs[6] ? <Style styleURL={props.stylesURLs[6]} index={6} setCurrentImageURL={props.setCurrentImageURL} setCurrentGroupOfImageURLs={props.setCurrentGroupOfImageURLs} dataFirstProduct={props.dataFirstProduct} handleClickStyle={props.handleClickStyle} specifySlideToContinueFrom={props.specifySlideToContinueFrom}/> : undefined}
        </Col>

        <Col>
        {props.stylesURLs[7] ? <Style styleURL={props.stylesURLs[7]} index={7} setCurrentImageURL={props.setCurrentImageURL} setCurrentGroupOfImageURLs={props.setCurrentGroupOfImageURLs} dataFirstProduct={props.dataFirstProduct} handleClickStyle={props.handleClickStyle} specifySlideToContinueFrom={props.specifySlideToContinueFrom}/> : undefined}
        </Col>

      </Row> */}
    </Grid>

  )
}

export default StyleSelector;