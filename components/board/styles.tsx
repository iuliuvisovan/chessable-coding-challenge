import { StyleSheet } from 'react-native';
import { BOARD_SIZE, BOARD_PADDING } from '../../constants';

export default StyleSheet.create({
  board: {
    width: BOARD_SIZE + 16 * 2 + 1 * 2, //2 * padding + 2 * border
    height: BOARD_SIZE + 16 * 2 + 1 * 2,
    padding: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderWidth: 1,
  },
  rankIndicators: {
    position: 'absolute',
    left: 4,
    top: 16,
    height: BOARD_SIZE,
    justifyContent: 'space-around',
  },
  indicator: {
    fontSize: 10,
    fontWeight: '600',
    color: 'gray'
  },
  fileIndicators: {
    position: 'absolute',
    left: 16,
    bottom: 2,
    width: BOARD_SIZE,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
