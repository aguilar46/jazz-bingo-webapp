/**
 * Author: RSP Aguilar
 * Created On: 2021-01-16T01:33:49.520Z
 */
//3rd Party
import React from 'react';
import _ from 'lodash';
import Modal from 'react-modal';
//local
import ModalView from './ModalView';
import { ModalBtn, ModalInfoText } from './ModalComponents';

const InfoModal = (props) => {
  const { message, onRequestClose } = props;
  return (
    <Modal {..._.omit(props, ['message'])} testID="info-modal">
      <ModalView>
        <ModalInfoText className="info-modal-text">{message}</ModalInfoText>
        <ModalBtn title="OK" onPress={onRequestClose} />
      </ModalView>
    </Modal>
  );
};

export default InfoModal;
