import React from 'react';
import { create } from 'react-test-renderer';
import Board from './index';

const boardTheme = { darkSquareColor: '#919caf', lightSquareColor: '#c0c2cf' };

const tree = create(<Board theme={boardTheme} />);

test('snapshot', () => {
  expect(tree).toMatchSnapshot();
});
