import { StyleSheet } from 'react-native';
import { BOARD_SIZE } from '../../constants';

export default StyleSheet.create({
  board: {
    width: BOARD_SIZE + 2, // +2 for border on both sides
    height: BOARD_SIZE + 2, // +2 for border on both sides
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderWidth: 1,
  },
});
