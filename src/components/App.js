//3rd party
import React, { useEffect } from 'react';
import styled from 'styled-components';
import _ from 'lodash';
//local
import Board from './Board';
import { useModal } from '../util/useModal';
import HamburgerModal, { hamburgerReturnOptions } from './modal/HamburgerModal';
import OptionsModal from './modal/OptionsModal';
import { atoms, touchTypes } from '../data';
import { getBingoTypeDisplayName, createNewBoard } from '../util';
import { useAtom } from 'jotai';

const TopView = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderView = styled.div`
  display: flex;
  flex-direction: row;
`;

const HeaderText = styled.div`
  font-size: 20px;
  padding: 10px;
`;

const Spacer = styled.div`
  flex: 1;
`;

const HamburgerBtn = styled.button`
  background-color: white;
  height: 100%;
`;

const clearBoard = (board) => {
  const newBoard = _.cloneDeep(board);

  newBoard.forEach((row) => row.forEach((space) => (space.isSelected = false)));

  return newBoard;
};

const getToggleLongPress = (action) =>
  action === touchTypes.VIEW ? touchTypes.SELECT : touchTypes.VIEW;

const App = (props) => {
  const [bingoType, setBingoType] = useAtom(atoms.bingoType);
  const [longPressAction, setLongPressAction] = useAtom(atoms.longPressAction);
  const [board, setBoard] = useAtom(atoms.board);

  const { modal: hamburgerModal, show: showHamburgerModal } =
    useModal(HamburgerModal);
  const { modal: allOptionsModal, show: showAllOptions } =
    useModal(OptionsModal);

  //init board
  useEffect(() => {
    if (!board) {
      setBoard(createNewBoard());
    }
  }, [board, setBoard]);

  const handleHamburgerModal = async () => {
    const result = await showHamburgerModal({ bingoType: bingoType });

    if (result) {
      const { action, payload } = result;
      switch (action) {
        case hamburgerReturnOptions.NEW_GAME:
          setBoard(createNewBoard());
          break;
        case hamburgerReturnOptions.CLEAR_BOARD:
          setBoard(clearBoard(board));
          break;
        case hamburgerReturnOptions.BINGO_TYPE:
          setBingoType(payload.value);
          break;
        case hamburgerReturnOptions.TOGGLE_LONG_PRESS:
          setLongPressAction(getToggleLongPress(longPressAction));
          break;
        case hamburgerReturnOptions.VIEW_ALL_OPTIONS:
          showAllOptions();
          break;
        default:
          break;
      }
    }
  };

  return (
    <TopView className="top-view">
      <HeaderView className="main-header">
        <HeaderText className="header-text">
          BINGO: {getBingoTypeDisplayName(bingoType)}{' '}
        </HeaderText>
        <Spacer />
        <HamburgerBtn
          className="hamburger-button"
          onClick={handleHamburgerModal}
        >
          ...
        </HamburgerBtn>
      </HeaderView>
      <Board className="game-board" />
      {hamburgerModal}
      {allOptionsModal}
    </TopView>
  );
};
export default App;
