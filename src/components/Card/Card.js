import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: white;
  border: 1px solid #b5b1b1;
  border-radius: 3px;
  box-shadow: 1px 3px 1px #f5eaea;
  cursor: pointer;
  padding: 20px;
  transition: all .15s linear;
  display: flex;
  align-items: center;
  
  &:hover {
    box-shadow: 0 5px 1px #f5eaea;
    transform: translateY(-3px);
  }
`;
const CardContent = styled.div`
  text-align: left;
`;
const Thumbnail = styled.img`
  border-radius: 50px;
  border: 1px solid #b5b1b1;
  margin-right: 15px;
`;
const Title = styled.h3`
  font-size: 1.2rem;
  color: #404040;
  font-weight: 400;
  margin: 5px 0 10px;
`;
const MetaData = styled.div`
  span {
    margin-left: 10px;
    &:first-child {
    margin-left: 0;
    }
  }
`;
const Rating = styled.span``;
const Time = styled.span``;
const Comment = styled.span``;

// {userName, userImg, userRating, registerTime, comment}

const card = (props) => {
  return (
    <Card>
      <Thumbnail src="http://placehold.it/50x50" alt=""/>
      <CardContent>
        <Title>Candidate Name</Title>
        <MetaData>
          <Rating>4.0</Rating>
          <Time>17d</Time>
          <Comment>1</Comment>
        </MetaData>
      </CardContent>
    </Card>
  )
};

export default card;
