import React, { Component } from 'react';
import Proptypes from 'prop-types';
import styled from 'styled-components';

import CardContainer from '../CardContainer/CardContainer';

class Board extends Component {

  state = {
    columns: [

    ]
  };

  render() {
    return(
      <div>

        <CardContainer/>

      </div>
    )
  }
};

export default Board;
