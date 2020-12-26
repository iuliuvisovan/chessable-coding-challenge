import { StyleSheet } from 'react-native';
import { BOARD_SIZE } from '../../constants';

export default StyleSheet.create({
  square: {
    width: BOARD_SIZE / 8,
    height: BOARD_SIZE / 8,
  },
});
