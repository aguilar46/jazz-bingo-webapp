/**
 * Author: RSP Aguilar
 * Create Date: 2021-01-16T20:20:25.254Z
 */
//3rd Party
import React from 'react';
import Modal from 'react-modal';
import _ from 'lodash';
import styled from 'styled-components';
//local
import ModalView from './ModalView';
import { ModalBtn, ModalInfoText, CloseBtn } from './ModalComponents';
import BingoTypeCombo from '../BingoTypeCombo';

export const returnOptions = {
  NEW_GAME: 'newGame',
  CHANGE_TYPE: 'changeType',
};

const StyledInfoText = styled(ModalInfoText)`
  text-align: center;
  font-size: 15px;
  font-weight: bold;
`;

const StyledCombo = styled(BingoTypeCombo)`
  width: 300px;
`;

const BingoModal = (props) => {
  const { onRequestClose, bingoType } = props;

  return (
    <Modal {..._.omit(props, ['bingoType'])} testID="bingo-modal">
      <ModalView>
        <StyledInfoText>BINGO!</StyledInfoText>
        <ModalBtn
          onClick={() =>
            onRequestClose({
              returnValue: { selectedOption: returnOptions.NEW_GAME },
            })
          }
        >
          New Game
        </ModalBtn>
        <StyledCombo
          placeholder="Change Game Type"
          excludeType={bingoType}
          testID="bingo-modal-change-type"
          onValueChange={(value) =>
            onRequestClose({
              returnValue: {
                selectedOption: returnOptions.CHANGE_TYPE,
                bingoType: value,
              },
            })
          }
        />
        <CloseBtn onClick={onRequestClose}>Close </CloseBtn>
      </ModalView>
    </Modal>
  );
};

export default BingoModal;
