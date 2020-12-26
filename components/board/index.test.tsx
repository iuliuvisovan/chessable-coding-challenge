import React from 'react';
import { create } from 'react-test-renderer';
import Board from './index';

const boardTheme = { darkSquareColor: '#b98661', lightSquareColor: '#f4d9b7' };

const tree = create(<Board theme={boardTheme} />);

test('snapshot', () => {
  expect(tree).toMatchSnapshot();
});
