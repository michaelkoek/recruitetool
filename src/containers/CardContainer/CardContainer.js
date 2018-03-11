import React, { Component } from 'react';
import Proptypes from 'prop-types';
import styled from 'styled-components';
import cN from 'classnames';

const Deck = styled.div`
  width: 275px;
  background-color: #d4d6d3;
  border: 1px solid black;
  
  draggedOver {
    backgrond-color: grey;
  }
`;

const DeckTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 700;
  color: #71766f;
`;

class CardContainer extends Component {

  state = {
    isHovering: false,
  };

  draggedOver = () => {
    this.setState({ isHovering: true })
  };

  render() {

    const { isHovering } = this.state;

    return(
      <Deck className={cN({'draggedOver': isHovering })}>
        <DeckTitle>Applicant</DeckTitle>

      </Deck>
    )
  }
};

export default CardContainer;
