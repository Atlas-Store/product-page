import React from 'react';
import styled, { css } from 'styled-components';
import Style from './Style.jsx';
import { Grid, Row, Col } from './Overview.jsx';

const StyleSelector = (props) => {
  const arrOfNumsStyle = Array.from({ length: props.stylesURLs.length }, (_, index) => index);
  const nestedArrOfNumsStyles = [];
  for (let i = 0; i < arrOfNumsStyle.length; i += 4) {
    nestedArrOfNumsStyles.push([arrOfNumsStyle[i], arrOfNumsStyle[i + 1],
      arrOfNumsStyle[i + 2], arrOfNumsStyle[i + 3]]);
  }

  return (
    <Grid>
      {nestedArrOfNumsStyles.map((item, i) => (
        <Row key={i}>
          <Col>
            {props.stylesURLs[item[0]]
              ? (
                <Style
                  setCurrentStyleIndex={props.setCurrentStyleIndex}
                  styleURL={props.stylesURLs[(nestedArrOfNumsStyles.indexOf(item)) * 4]}
                  index={(nestedArrOfNumsStyles.indexOf(item)) * 4}
                  setCurrentImageURL={props.setCurrentImageURL}
                  setCurrentGroupOfImageURLs={props.setCurrentGroupOfImageURLs}
                  styles={props.styles}
                  handleClickStyle={props.handleClickStyle}
                  specifySlideToContinueFrom={props.specifySlideToContinueFrom}
                />
              )
              : undefined}
          </Col>

          <Col>
            {props.stylesURLs[item[1]]
              ? (
                <Style
                  setCurrentStyleIndex={props.setCurrentStyleIndex}
                  styleURL={props.stylesURLs[(nestedArrOfNumsStyles.indexOf(item)) * 4 + 1]}
                  index={(nestedArrOfNumsStyles.indexOf(item)) * 4 + 1}
                  setCurrentImageURL={props.setCurrentImageURL}
                  setCurrentGroupOfImageURLs={props.setCurrentGroupOfImageURLs}
                  styles={props.styles}
                  handleClickStyle={props.handleClickStyle}
                  specifySlideToContinueFrom={props.specifySlideToContinueFrom}
                />
              )
              : undefined}
          </Col>

          <Col>
            {props.stylesURLs[item[2]]
              ? (
                <Style
                  setCurrentStyleIndex={props.setCurrentStyleIndex}
                  styleURL={props.stylesURLs[(nestedArrOfNumsStyles.indexOf(item)) * 4 + 2]}
                  index={(nestedArrOfNumsStyles.indexOf(item)) * 4 + 2}
                  setCurrentImageURL={props.setCurrentImageURL}
                  setCurrentGroupOfImageURLs={props.setCurrentGroupOfImageURLs}
                  styles={props.styles}
                  handleClickStyle={props.handleClickStyle}
                  specifySlideToContinueFrom={props.specifySlideToContinueFrom}
                />
              )
              : undefined}
          </Col>

          <Col>
            {props.stylesURLs[item[3]]
              ? (
                <Style
                  setCurrentStyleIndex={props.setCurrentStyleIndex}
                  styleURL={props.stylesURLs[(nestedArrOfNumsStyles.indexOf(item)) * 4 + 3]}
                  index={(nestedArrOfNumsStyles.indexOf(item)) * 4 + 3}
                  setCurrentImageURL={props.setCurrentImageURL}
                  setCurrentGroupOfImageURLs={props.setCurrentGroupOfImageURLs}
                  styles={props.styles}
                  handleClickStyle={props.handleClickStyle}
                  specifySlideToContinueFrom={props.specifySlideToContinueFrom}
                />
              )
              : undefined}
          </Col>

        </Row>
      ))}
    </Grid>

  );
};

export default StyleSelector;
