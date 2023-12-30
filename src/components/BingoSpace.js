/**
 * Author: RSP Aguilar
 * Created On: 2021-01-15T05:35:26.505Z
 */

import React from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import jazzIcon from '../images/jazz-logo-mark.png';
import PropTypes from 'prop-types';

const Space = styled.button`
  border: solid 1px black;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;

  ${(props) => props.selected && `background-image: url(${jazzIcon});`}
  background-size: 100%;
`;

const BingoSpace = (props) => {
  const { label } = props;

  return (
    <Space {..._.omit(props, ['label'])} className="bingo-space">
      {label}
    </Space>
  );
};

BingoSpace.propTypes = {
  label: PropTypes.string,
  selected: PropTypes.bool,
};

BingoSpace.displayName = 'BingoSpace';
export default BingoSpace;
