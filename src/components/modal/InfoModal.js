/**
 * Author: RSP Aguilar
 * Created On: 2021-01-16T01:33:49.520Z
 */
//3rd Party
import React from 'react';
import _ from 'lodash';
import Modal from 'react-modal';
//local
import { ModalBtn, ModalInfoText } from './ModalComponents';

const InfoModal = (props) => {
  const { message, onRequestClose } = props;
  return (
    <Modal {..._.omit(props, ['message'])} className="info-modal">
      <ModalInfoText className="info-modal-text">{message}</ModalInfoText>
      <ModalBtn title="OK" onPress={onRequestClose} />
    </Modal>
  );
};

export default InfoModal;
