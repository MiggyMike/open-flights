import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import styled from "styled-components";
import Rating from "../Rating/Rating";

const Card = styled.div`
  border: 1px solid #efefef;
  background: fff;
`;
const AirlineLogo = styled.div`
  height: 50px;
  padding-top: 20px;

  img {
    height: 50px;
    width: 50px;
    border-radius: 100%;
    border: 1px solid #efefef;
  }
`;
const AirlineName = styled.div`
  padding: 20px 0 10px 0;
`;
const LinkWrapper = styled.div`
  margin: 30px 0 20px 0;
  height: 50px;

  a {
    color: #fff;
    background-color: #2d3436;
    background-image: linear-gradient(315deg, #2d3436 0%, #000000 75%);
    border-radius: 4px;
    padding: 10px 50px;
    border: 1px solid #000;
    width: 100%;
    text-decoration: none;
  }
`;

const Airline = (props) => {
  return (
    <Card>
      <AirlineLogo>
        <img src={props.attributes.image_url} alt={props.attributes.name} />
      </AirlineLogo>
      <AirlineName>{props.attributes.name}</AirlineName>
      <Rating score={props.attributes.avg_score} />
      <div className='airline-score'>{props.attributes.avg_score}</div>
      <LinkWrapper>
        <Link to={`/airlines/${props.attributes.slug}`}>View Airline</Link>
      </LinkWrapper>
    </Card>
  );
};

export default Airline;
