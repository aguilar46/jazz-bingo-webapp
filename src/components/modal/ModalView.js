/**
 * Author: RSP Aguilar
 * Created On: 2021-01-16T01:34:22.689Z
 */
import React from 'react';
import styled from 'styled-components';
import _ from 'lodash';

const TopView = styled.div`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;
const InnerView = styled.div`
  background-color: white;
  margin: 20px;
  padding: 20px;
  border: solid 2px black;
  border-radius: 12px;
`;

const ModalView = (props) => (
  <TopView {..._.omit(props, ['children'])}>
    <InnerView>{props.children}</InnerView>
  </TopView>
);

export default ModalView;
