import React, { Component } from 'react';
import Proptypes from 'prop-types';
import styled from 'styled-components';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import CardContainer from '../CardContainer/CardContainer';
import Card from '../../components/Card/Card';


@DragDropContext(HTML5Backend)
class Board extends Component {

  state = {
    columns: []
  };

  render() {
    return(
      <div>

        <CardContainer/>
        <Card name="Andres Bovloski" />
      </div>
    )
  }
};

export default Board;
